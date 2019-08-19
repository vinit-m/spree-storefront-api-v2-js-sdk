import Http from '../Http';
import { AddAddressAttr } from '../interfaces/Address';
import { IToken, ITokenResult } from '../interfaces/Token';
export default class Address extends Http {
    public add(token: IToken, params: AddAddressAttr): Promise<ITokenResult>;
}
