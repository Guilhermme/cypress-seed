/* eslint-disable cypress/no-unnecessary-waiting */
import 'cypress-wait-until'
import 'cypress-localstorage-commands'
import authRequest from '../api/authRequest'

Cypress.Commands.add('Autenticar', () => {
    const body = () => ({
        'user': Cypress.env('USER_SSO_ADMIN'),
        'password': Cypress.env('PASSWORD_ADMIN'),
        'application_id': Cypress.env('APP_ID_BAAP_CONSOLE')
    })
    authRequest.post('sso', '/auth', ['!authorization'], body())
        .then((res) => {
            expect(res['status']).to.equal(200)
            Cypress.env('ACCESS_TOKEN', res['body'].value['access_token'])
            Cypress.env('REFRESH_TOKEN', res['body'].value['refresh_token'])
        })
})
