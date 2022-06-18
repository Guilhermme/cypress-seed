/* eslint-disable cypress/no-unnecessary-waiting */
describe('Testes Login', () => {

    it('Login', () => {
        cy.visit(Cypress.env('FRONT'))
        cy.wait(2000)
        cy.get('.logo').should('be.visible')
    })

    it('Login', () => {
        cy.Login()
    })
})
