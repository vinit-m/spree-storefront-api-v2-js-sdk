export const authParams = ({ username, password, orderToken = '' , campaign_code = '', cookie_id = '', cookies_data = [] }) => {
  const payload = { username, password, grant_type: 'password' }
  if (orderToken.length) {
    const key = 'orderToken'
    payload[key] = orderToken
  }
  if (campaign_code) {
    const key = 'campaign_code'
    payload[key] = campaign_code
  }
  if (cookie_id) {
    const key = 'cookie_id'
    payload[key] = cookie_id
  }
  if (cookies_data.length) {
    const key = 'cookies_data'
    payload[key] = cookies_data
  }
  return payload
}

export const refreshParams = ({ refresh_token }) => ({
  refresh_token,
  grant_type: 'refresh_token'
})

export const registerParams = (params) => ({
 user: {...params}
})
