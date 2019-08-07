import { POST } from '../constants'
import { authParams, refreshParams, registerParams } from '../helpers/auth'
import Http from '../Http'
import { AuthTokenAttr, RefreshTokenAttr, RegisterAttr } from '../interfaces/Authentication'
import { ITokenResult } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Authentication extends Http {
  public async getToken(params: AuthTokenAttr): Promise<ITokenResult> {
    return await this.spreeResponse(POST, Routes.oauthTokenPath(), {}, authParams(params)) as ITokenResult
  }
  public async refreshToken(params: RefreshTokenAttr): Promise<ITokenResult> {
    return await this.spreeResponse(POST, Routes.oauthTokenPath(), {}, refreshParams(params)) as ITokenResult
  }
  public async registerUser(params: RegisterAttr): Promise<ITokenResult> {
    return await this.spreeResponse(POST, Routes.registerPath(), {}, registerParams(params)) as ITokenResult
  }
}
