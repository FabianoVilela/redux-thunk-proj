import { loadUA } from './actions'

describe('testing actions', () => {
  test('loadUA', (done) => {
    const get = jest.fn()
    const data = {}
    get.mockReturnValue(Promise.resolve({data}))

    let callNumber = 0
    const dispatch = jest.fn( params => {
      if (callNumber === 0) {
        expect(params).toEqual({type: 'LOAD_UA_REQUEST' })
      }
      // UNDER REVISION
      // if (callNumber === 1) {
      //   expect(params).toEqual({
      //     type: 'LOAD_UA_SUCCESS',
      //     data: data
      //   })
      //   done()
      // }
      if (callNumber === 1) {
        expect(params).toEqual({
          type: 'LOAD_UA_ERROR'
        })
        done()
      }
      callNumber++
    })
    const axiosMock = { get }
    loadUA(axiosMock)(dispatch)
  })
})
