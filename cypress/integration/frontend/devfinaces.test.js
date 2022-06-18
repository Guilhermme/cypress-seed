const dayjs = require('dayjs')
const dataAtual = dayjs().locale('pt-br').format('YYYY-MM-DD')

describe('Testes da aplicação dev.finance$', () => {
    beforeEach(() => {
        cy.visit('https://maratona-discover-devfinance.netlify.app/#')
    })

    it('deve adicionar uma transação de entrada com sucesso', () => {
        cy.criarTransacao()
        cy.descricao('Transação de entrada')
        cy.valor('1300')

        cy.get('#date')
            .click()
            .type(dataAtual)

        cy.get('button').contains('Salvar').click()

        cy.get('.balance > :nth-child(2)')
            .should('contain.html', 'R$&nbsp;1.300,00')

        cy.get('.total')
            .should('contain.html', 'R$&nbsp;1.300,00')
            .and('have.css', 'background-color', 'rgb(73, 170, 38)')

        cy.verificarTabela('income', 'Transação de entrada', 'R$&nbsp;1.300,00')
    })

    it('deve adicionar uma transação de saída com sucesso', () => {
        cy.criarTransacao()
        cy.descricao('Transação de saída')
        cy.valor('-1300')

        cy.get('#date')
            .click()
            .type(dataAtual)

        cy.get('button').contains('Salvar').click()

        cy.get('.balance > :nth-child(3)')
            .should('contain.html', '-R$&nbsp;1.300,00')

        cy.get('.total')
            .should('contain.html', '-R$&nbsp;1.300,00')
            .and('have.css', 'background-color', 'rgb(73, 170, 38)')

        cy.verificarTabela('expense', 'Transação de saída', '-R$&nbsp;1.300,00')
    })

    it('deve editar uma transação', () => {
        cy.criarTransacao()
        cy.descricao('Transação de entrada')
        cy.valor('1300')

        cy.get('#date')
            .click()
            .type(dataAtual)

        cy.get('button').contains('Salvar').click()

        cy.get('.data-table-edit').click()

        cy.descricao('Editando nome da transação')
        cy.valor('2500')
        cy.get('button').contains('Salvar').click()

        cy.get('.balance > :nth-child(2)')
            .should('contain.html', 'R$&nbsp;2.500,00')

        cy.verificarTabela('income', 'Editando nome da transação', 'R$&nbsp;2.500,00')
    })

    it('deve excluir uma transação', () => {
        cy.criarTransacao()
        cy.descricao('Transação de entrada')
        cy.valor('1300')

        cy.get('#date')
            .click()
            .type(dataAtual)

        cy.get('button').contains('Salvar').click()

        cy.get('.balance > :nth-child(2)')
            .should('contain.html', 'R$&nbsp;1.300,00')

        cy.get('[onclick="Transaction.remove(0)"]').click()

        cy.get('.balance > :nth-child(2)')
            .should('contain.html', 'R$&nbsp;0,00')
    })

    it('deve exibir alerta ao salvar transação com todos os campos vazios', () => {
        cy.criarTransacao()
        cy.get('button').contains('Salvar').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Porfavor preencha todos os campos')
        })
    })

    it('deve alterar a aplicação para o darkmode', () => {
        cy.get('.theme-switch-label').click()

        cy.get('html')
            .should('have.class', 'night-mode')
            .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
    })
})
