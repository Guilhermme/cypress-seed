import authRequest from '../../support/api/authRequest'

// É executado no ambiente de stage

describe('Testes fakerest', () => {

    it('Activities', () => {

        authRequest.get('fakerest', '/api/v1/Activities', ['authorization'])
            .then((res) => {
                expect(res['status']).to.equal(200)
            })

    })

})
