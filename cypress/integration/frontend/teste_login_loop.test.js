/* eslint-disable cypress/no-unnecessary-waiting */
// eslint-disable-next-line no-unused-vars

describe('Testes Login', () => {
    Cypress._.times(5, (i) => {
        it(`repetindo 15x ${i + 1} `, () => {
            cy.Login()
        })
    })
})
