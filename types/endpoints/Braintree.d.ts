import Http from '../Http';
import { getClientToken } from '../interfaces/Braintree';
import { IToken, ITokenResult } from '../interfaces/Token';
export default class Braintree extends Http {
    getClientToken(token: IToken, params: getClientToken): Promise<ITokenResult>;
}
