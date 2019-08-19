import { GET, POST } from '../constants'
import { addAddressParams } from '../helpers/address'
import Http from '../Http'
import { AddAddressAttr } from '../interfaces/Address'
import { IToken, ITokenResult } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Address extends Http {

    // Add Address API
    public async add(token: IToken, params: AddAddressAttr): Promise<ITokenResult> {
        return await this.spreeResponse(POST, Routes.addressPath(), token, addAddressParams(params)) as ITokenResult
    }

}
