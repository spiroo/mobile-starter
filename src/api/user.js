import request from '../utils/axios'

export function fetchList (params) {
  return request({
    url: 'http://jsonplaceholder.typicode.com/users',
    method: 'get',
    data: params
  })
}
