import request from '@/utils/request'
/**
 *
 * @param {题目接口} query
 */
export function taskList (query) {
  return request({
    url: 'question/list',
    method: 'get',
    params: query
  })
}

export function taskInfo (questionId) {
  return request({
    url: 'question/get',
    method: 'get',
    params: { questionId }
  })
}

export function taskAdd (data) {
  return request({
    url: 'question/add',
    method: 'post',
    data
  })
}

export function taskEdit (data) {
  return request({
    url: 'question/update',
    method: 'put',
    data
  })
}
