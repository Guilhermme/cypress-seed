import authRequest from '../../support/api/authRequest'

// É executado no ambiente de develop

describe('Testes Age Of Empires II API', () => {

    it('Gets a list of all the civilizations', () => {

        authRequest.get('empire', '/api/v1/civilizations', ['authorization'])
            .then((res) => {
                expect(res['status']).to.equal(200)
            })

    })

})
