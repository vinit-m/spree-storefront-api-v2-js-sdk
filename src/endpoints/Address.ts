import { GET, POST, PUT } from '../constants'
import { addAddressParams } from '../helpers/address'
import Http from '../Http'
import { AddAddressAttr } from '../interfaces/Address'
import { IToken, ITokenResult } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Address extends Http {

    // Get Address API
    public async get(token: IToken): Promise<ITokenResult> {
        return await this.spreeResponse(GET, Routes.addressPath(), token ) as ITokenResult
    }
    // Add Address API
    public async add(token: IToken, params: AddAddressAttr): Promise<ITokenResult> {
        return await this.spreeResponse(POST, Routes.addressPath(), token, addAddressParams(params)) as ITokenResult
    }
    // Update Address API
    public async update(token: IToken, params: AddAddressAttr): Promise<ITokenResult> {
        return await this.spreeResponse(PUT, Routes.addressPath(), token, addAddressParams(params)) as ITokenResult
    }
    // Update Tax Zone API
    public async updateTaxZone(token: IToken): Promise<ITokenResult> {
        return await this.spreeResponse(GET, Routes.updateTaxZone(), token ) as ITokenResult
    }

}
