import config from '../config'

const TokenService = {
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  saveAuthToken(token) {
    console.log(token)
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    console.info('clearing the auth token')
    window.localStorage.removeItem(config.TOKEN_KEY)
  },

  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
}

export default TokenService