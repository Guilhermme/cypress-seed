/* eslint-disable no-unused-vars */
/* eslint-disable cypress/no-unnecessary-waiting */
import 'cypress-wait-until'
import 'cypress-localstorage-commands'

const dayjs = require('dayjs')
const dataAtual = dayjs().locale('pt-br').format('YYYY-MM-DD')

Cypress.Commands.add('Login', () => {
    cy.visit(Cypress.env('FRONT'))
    cy.wait(1500)
    // cy.get('#login-username').type(Cypress.env('USER'))
    // cy.get('#login-password').type(Cypress.env('PASSWORD'))
    // cy.get('#login-btn-continue').click()
})

Cypress.Commands.add('waitP', () => {
    cy.waitUntil(() => cy.window().then(win => !win.document.querySelector('.icon')), {
        timeout: 15000
    })
})

Cypress.Commands.add('checkTagTextExist', (tag, text) => {
    cy.xpath(`//${tag}[text()="${text}"]`).should('exist')
})

Cypress.Commands.add('criarTransacao', () => {
    cy.get('#transactions > .button')
        .should('have.text', '+ Nova transação')
        .click()

    cy.get('.modal')
        .should('exist')
        .and('contain', 'Nova Transação')
})

Cypress.Commands.add('descricao', (descricao) => {
    cy.get('#description')
        .should('have.attr', 'placeholder', 'Descrição')
        .clear()
        .type(descricao)
})

Cypress.Commands.add('valor', (valor) => {
    cy.get('#amount')
        .should('have.attr', 'placeholder', 'Informe o valor')
        .clear()
        .type(valor)
})

Cypress.Commands.add('salvarTransacao', () => {
    cy.get('button')
        .contains('Salvar')
        .click()
})

Cypress.Commands.add('verificarTabela', (tipoTransacao, desc, val) => {
    cy.get('.data-table__description')
        .should('have.text', desc)

    cy.get('.data-table__date')
        .should('have.text', dayjs().locale('pt-br').format('DD/MM/YYYY'))

    cy.get(`.data-table__price-${tipoTransacao}`).should('contain.html', val)
})
