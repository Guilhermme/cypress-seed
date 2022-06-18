const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib')
const cucumber = require('cypress-cucumber-preprocessor').default
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile (file) {
    // caminho da pasta onde estão presentes os arquivos JSON dos ambientes
    const pathToConfigFile = path.resolve('config', `${file}.json`)

    return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
    require('@cypress/code-coverage/task')(on, config)

    const file = config.env.configFile || 'stage'
    on('file:preprocessor', cucumber())

    on('before:run', async (details) => {
        console.log('override before:run')
        await beforeRunHook(details)
    })

    on('after:run', async () => {
        console.log('override after:run')
        await afterRunHook()
    })
    console.warn(getConfigurationByFile(file))
    return getConfigurationByFile(file)
}

// const cucumber = require('cypress-cucumber-preprocessor').default
// module.exports = (on, config) => {
//     // aceita um valor de "configFile" ou usa "develop" por padrão
//     const file = config.env.configFile || 'stage'
//     on('file:preprocessor', cucumber())
//     return getConfigurationByFile(file)
// }
