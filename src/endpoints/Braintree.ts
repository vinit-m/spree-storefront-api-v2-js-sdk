import {  POST } from '../constants'
import Http from '../Http'
import { getClientToken } from '../interfaces/Braintree'
import { IToken, ITokenResult } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Braintree extends Http {
    // Get Braintree Client Token
    public async getClientToken(token: IToken, params: getClientToken): Promise<ITokenResult> {
        return await this.spreeResponse(POST, Routes.braintreeClient(), token, params) as ITokenResult
    }

}
