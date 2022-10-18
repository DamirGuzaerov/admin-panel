import fetch from 'auth/FetchInterceptor'

const userService = {}

userService.getUserList = function (params) {
  return fetch({
    url: '/users',
    method: 'get',
    params
  })
}

userService.getUserById = async function (id) {
    return fetch({
      url: `/users/${id}`,
      method: 'get',
    })
}


export default userService