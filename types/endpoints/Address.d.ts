import Http from '../Http';
import { AddAddressAttr } from '../interfaces/Address';
import { IToken, ITokenResult } from '../interfaces/Token';
export default class Address extends Http {
    get(token: IToken): Promise<ITokenResult>;
    add(token: IToken, params: AddAddressAttr): Promise<ITokenResult>;
    update(token: IToken, params: AddAddressAttr): Promise<ITokenResult>;
    updateTaxZone(token: IToken): Promise<ITokenResult>;
}
