import { POST } from '../constants'
import Http from '../Http'
import { IQuery } from '../interfaces/Query'
import {  ITokenResult } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Reaffiliate extends Http {

    // Verify Affiliate Code API
    public async verify( id: string, params: IQuery = {}): Promise<ITokenResult> {
        return await this.spreeResponse(POST, Routes.affiliateIdVerifyPath(id), {}, params ) as ITokenResult
    }
}
