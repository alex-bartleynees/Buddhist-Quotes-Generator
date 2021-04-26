import request from 'superagent'

const rootUrl = '/api/v1'

export function getAllQuotes () {
  return request.get(rootUrl + '/quotes/random')
    .then(res => {
      return res.body
    })
}
