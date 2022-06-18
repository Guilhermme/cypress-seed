require('cypress-xpath')
import 'cypress-wait-until'
import './api/commands_api'
import './frontend/commands'
import 'cypress-localstorage-commands'
import '@cypress/code-coverage/support'
import 'cypress-mochawesome-reporter/register'

// Exemplo de como exportar variavel de ambiente no terminal ou no bashrc
// export CYPRESS_PASSWORD_COMUM=valor
// export CYPRESS_PASSWORD_ADMIN=valor
