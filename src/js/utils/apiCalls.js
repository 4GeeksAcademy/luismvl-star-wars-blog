const baseUrl = 'https://www.swapi.tech/api/'

async function makeRequest(url, method = 'GET', body = null) {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body && JSON.stringify(body),
  })
  const data = await response.json()
  if (!response.ok) {
    const newError = new Error(data.msg)
    newError.httpStatus = response.status
    throw newError
  }
  return data
}
