const generateToken = () => {
    cy.request({
        'method': 'POST',
        'url': `${Cypress.env('URL_SSO')}/auth`,
        'headers': {
            'content-type': 'application/json'
        },
        'body': {
            'user': Cypress.env('USER_SSO_ADMIN'),
            'password': Cypress.env('PASSWORD_ADMIN'),
            'application_id': Cypress.env('APP_ID_BAAP_CONSOLE')
        },
        'timeout': 60000
    })
        .then(res => {
            expect(res.status).to.equal(200)
            Cypress.env('ACCESS_TOKEN', res['body'].value['access_token'])
            Cypress.env('REFRESH_TOKEN', res['body'].value['refresh_token'])
        })
}

export default generateToken
