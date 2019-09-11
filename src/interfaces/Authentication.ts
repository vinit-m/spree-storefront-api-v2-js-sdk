export interface AuthTokenAttr {
  username: string
  password: string
  orderToken?: string
}

export interface RefreshTokenAttr {
  refresh_token: string
}

export interface RegisterAttr {
  email: string
  password: string
  first_name: string
  last_name: string
}

export interface ForgetPasswordAttr {
  email: string
}

export interface ResetPasswordAttr {
  token: string
  password: string
}

export interface UpdatePasswordAttr {
  password: string
  new_password: string
  password_confirmation: string
}
