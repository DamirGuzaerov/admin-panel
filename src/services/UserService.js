import fetch from 'auth/FetchInterceptor'

const userService = {}

userService.getUserList = function (params) {
  return fetch({
    url: '/users',
    method: 'get',
    params
  })
}

export default userService