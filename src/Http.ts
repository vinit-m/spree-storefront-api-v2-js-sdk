import Axios, { AxiosError, AxiosInstance } from 'axios'
import * as qs from 'qs'
import { DELETE, GET } from './constants'
import {
  BasicSpreeError, ExpandedSpreeError, MisconfigurationError, NoResponseError, SpreeError, SpreeSDKError
} from './errors'
import Result from './helpers/Result'
import { ErrorClass } from './interfaces/errors/ErrorClass'
import { JsonApiResponse } from './interfaces/JsonApi'
import { ResultResponse } from './interfaces/ResultResponse'
import { IToken } from './interfaces/Token'

export default class Http {
  public host: string
  public timeout: number
  public axios: AxiosInstance

  constructor(host?: string, timeout?: number, onSuccess?: (response: any) => void, onError?: (error: any) => void) {
    this.host = host || process.env.SPREE_HOST || 'http://localhost:3000/'
    this.timeout = timeout || 0

    this.axios = Axios.create({
      baseURL: this.host,
      timeout: this.timeout,
      headers: {
        'Content-Type': 'application/json'
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'brackets' })
      }
    })

    this.axios.interceptors.response.use( (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      if (onSuccess) {
        try {
          onSuccess(response)
        } catch (e) {
          console.log(e)
        }
      }
      return response
    }, (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if (onError) {
        try {
        onError(error)
        } catch (e) {
          console.log(e)
        }
      }
      return Promise.reject(error)
    })
  }

  protected async spreeResponse(
    method: string, route: string, tokens: IToken = {}, params: any = {}
  ): Promise<ResultResponse<JsonApiResponse>> {
    try {
      let res
      const reqFunc = this.axios[method]
      const headers = this.spreeOrderHeaders(tokens)

      if (method === GET || method === DELETE) {
        res = await reqFunc(route, { params, headers })
      } else {
        res = await reqFunc(route, params, { headers })
      }

      return Result.success(res.data)
    } catch (error) {
      return Result.fail(this.processError(error))
    }
  }

  /**
   * HTTP error code returned by Spree is not indicative of its response shape. This function attempts to figure out the
   * information provided from Spree and use whatever is available.
   */
  private classifyError(error: AxiosError): ErrorClass {
    const { error: errorSummary, errors } = error.response.data

    if (typeof errorSummary === 'string') {
      if (typeof errors === 'object') {
        return ErrorClass.FULL
      }
      return ErrorClass.BASIC
    }
    return ErrorClass.LIMITED
  }

  private processError(error: AxiosError): SpreeSDKError {
    if (error.response) {
      // Error from Spree outside HTTP 2xx codes
      return this.processSpreeError(error)
    } else if (error.request) {
      // No response received from Spree
      return new NoResponseError()
    } else {
      // Incorrect request setup
      return new MisconfigurationError(error.message)
    }
  }

  private processSpreeError(error: AxiosError): SpreeError {
    const { error: errorSummary, errors } = error.response.data
    const errorClass = this.classifyError(error)

    if (errorClass === ErrorClass.FULL) {
      return new ExpandedSpreeError(error.response, errorSummary, errors)
    } else if (errorClass === ErrorClass.BASIC) {
      return new BasicSpreeError(error.response, errorSummary)
    } else {
      return new SpreeError(error.response)
    }
  }

  private spreeOrderHeaders(tokens) {
    const header = {}

    if (tokens.orderToken) {
      header['X-Spree-Order-Token'] = tokens.orderToken
    }

    if (tokens.bearerToken) {
      header['Authorization'] = `Bearer ${tokens.bearerToken}`
    }

    return header
  }
}
