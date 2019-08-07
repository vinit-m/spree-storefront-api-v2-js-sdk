import Http from '../Http';
import { AuthTokenAttr, RefreshTokenAttr, RegisterAttr } from '../interfaces/Authentication';
import { ITokenResult } from '../interfaces/Token';
export default class Authentication extends Http {
    getToken(params: AuthTokenAttr): Promise<ITokenResult>;
    refreshToken(params: RefreshTokenAttr): Promise<ITokenResult>;
    registerUser(params: RegisterAttr): Promise<ITokenResult>;
}
