import request from '@/utils/request'
/**
 *
 * @param {mock-demo请求接口} query
 */
export function demoList (query) {
  return request({
    url: 'list',
    method: 'get',
    params: query
  })
}
