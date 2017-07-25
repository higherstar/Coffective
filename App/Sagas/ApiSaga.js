// @flow

import ApiConfig from '../Config/AppConfig'

const prepareRequestBody = (body: Object): string => JSON.stringify(body)

const prepareRequestHeaders = (headers = {}): Object => ({
  'Content-Type': 'application/json',
  ...headers
})

export default function * (method: string, url: string, data: ?Object): Generator<Object, Object, Object> {
  const composeUrl: string = ApiConfig.apiUrl + url
  const requestData = {}

  if (data) {
    requestData.body = prepareRequestBody(data)
  }
  requestData.headers = prepareRequestHeaders()

  try {
    const response: any = yield fetch(composeUrl, { method, ...requestData })

    // Workaround as backend returns empty response (e.g. DELETE 202) and JSON.parse fails
    try {
      const responseBody = yield response.json()
      return response.ok ? { res: responseBody } : { err: responseBody }
    } catch (error) {
      return response.ok ? { res: {} } : { err: {} }
    }
  } catch (err) {
    return { err: {} }
  }
}
