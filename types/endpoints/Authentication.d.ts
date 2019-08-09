import Http from '../Http';
import { AuthTokenAttr, ForgetPasswordAttr, RefreshTokenAttr, RegisterAttr, ResetPasswordAttr, UpdatePasswordAttr } from '../interfaces/Authentication';
import { IToken, ITokenResult } from '../interfaces/Token';
export default class Authentication extends Http {
    getToken(params: AuthTokenAttr): Promise<ITokenResult>;
    refreshToken(params: RefreshTokenAttr): Promise<ITokenResult>;
    registerUser(params: RegisterAttr): Promise<ITokenResult>;
    forgotPassword(params: ForgetPasswordAttr): Promise<ITokenResult>;
    resetPassword(params: ResetPasswordAttr): Promise<ITokenResult>;
    updatePassword(token: IToken, params: UpdatePasswordAttr): Promise<ITokenResult>;
    deleteAccount(token: IToken): Promise<ITokenResult>;
}
