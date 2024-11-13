const assert = require('assert')
const {isAuthenticated} = require('../../src/auth')

describe('auth', () => {
  it('no basic auth provided', () => {
    const reqs = [
      {url: 'http://localhost:3000/e-commerce', headers: new Map()},
      {url: 'http://localhost:3000/e-commerce/products/blah', headers: new Map()},
      {url: 'http://localhost:3000/e-commerce/products/gorgeous-cotton-computer', headers: new Map()},
    ]
    assert.deepStrictEqual(
      reqs.map(req => isAuthenticated(req)),
      [{accessGranted: true}, {accessGranted: true}, {accessGranted: false}]
  )
  })
  it('basic auth provided', () => {
    const validAuthHeaders = new Map([['authorization', 'Basic dXNlcjpwYXNz']])
    const invalidAuthHeaders = new Map([['authorization', 'Basic cXNlcjpwYXNy']])
    const reqs = [
      {url: 'http://localhost:3000/e-commerce', headers: validAuthHeaders},
      {url: 'http://localhost:3000/e-commerce/products/blah', headers: invalidAuthHeaders},
      {url: 'http://localhost:3000/e-commerce/products/gorgeous-cotton-computer', headers: validAuthHeaders},
    ]
    assert.deepStrictEqual(
      reqs.map(req => isAuthenticated(req)),
      [{accessGranted: true, loggedIn: true}, {accessGranted: false}, {accessGranted: true, loggedIn: true}]
    )
  })
})
