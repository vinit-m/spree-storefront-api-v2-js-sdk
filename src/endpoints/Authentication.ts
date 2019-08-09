import { DELETE, POST, PUT } from '../constants'
import { authParams, refreshParams, registerParams } from '../helpers/auth'
import Http from '../Http'
import { AuthTokenAttr,
  ForgetPasswordAttr,
  RefreshTokenAttr,
  RegisterAttr,
  ResetPasswordAttr,
  UpdatePasswordAttr } from '../interfaces/Authentication'
import {  IToken, ITokenResult } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Authentication extends Http {
  public async getToken(params: AuthTokenAttr): Promise<ITokenResult> {
    return await this.spreeResponse(POST, Routes.oauthTokenPath(), {}, authParams(params)) as ITokenResult
  }
  public async refreshToken(params: RefreshTokenAttr): Promise<ITokenResult> {
    return await this.spreeResponse(POST, Routes.oauthTokenPath(), {}, refreshParams(params)) as ITokenResult
  }
  // Register User API
  public async registerUser(params: RegisterAttr): Promise<ITokenResult> {
    return await this.spreeResponse(POST, Routes.registerPath(), {}, registerParams(params)) as ITokenResult
  }
  // Forget Password API
  public async forgotPassword(params: ForgetPasswordAttr): Promise<ITokenResult> {
    return await this.spreeResponse(POST, Routes.forgetPasswordPath(), {}, params) as ITokenResult
  }
  // Reset Password API
  public async resetPassword(params: ResetPasswordAttr): Promise<ITokenResult> {
    return await this.spreeResponse(POST, Routes.resetPasswordPath(), {}, params) as ITokenResult
  }
  // Update Password API
  public async updatePassword(token: IToken, params: UpdatePasswordAttr): Promise<ITokenResult> {
    return await this.spreeResponse(PUT, Routes.updatePasswordPath(), token, params) as ITokenResult
  }
  // Update Password API
  public async deleteAccount(token: IToken): Promise<ITokenResult> {
    return await this.spreeResponse(DELETE, Routes.registerPath(), token, {}) as ITokenResult
  }
}
