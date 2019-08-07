export interface AuthTokenAttr {
  username: string
  password: string
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
