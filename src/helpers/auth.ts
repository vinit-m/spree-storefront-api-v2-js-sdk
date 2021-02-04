export const authParams = ({ username, password, orderToken = '' , campaign_code = '' }) => {
  const payload = { username, password, grant_type: 'password' }
  if (orderToken.length) {
    const key = 'orderToken'
    payload[key] = orderToken
  }
  if (campaign_code) {
    const key = 'campaign_code'
    payload[key] = campaign_code
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
