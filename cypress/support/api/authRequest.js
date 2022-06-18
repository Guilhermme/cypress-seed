const address = (url, path) => {
    switch (url.toLowerCase()) {
        case 'empire':
            return `${Cypress.env('URL_API_AGE_EMPIRES')}${path}`
        case 'fakerest':
            return `${Cypress.env('URL_API_FAKEREST')}${path}`
    }
}

const reqHeader = (params) => {
    const header = {
        'accept': 'application/json',
        'content-type': 'application/json',
        'authorization': ''
    }
    Object.keys(header).forEach(key => {
        if (params.includes(`!${key}`)) {
            delete header[key]
        } else if (key.toLowerCase() === 'authorization') {
            header[key] = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
        }
    })
    console.log(header)
    return header
}

export default {
    post: (url, path, header = [], body = {}, failOnStatusCode = false, timeout = 60000) => {
        return cy.request({
            'method': 'POST',
            'url': address(url, path),
            'headers': reqHeader(header),
            'body': body,
            'timeout': timeout,
            'failOnStatusCode': failOnStatusCode
        })
    },

    get: (url, path, header = [], failOnStatusCode = false, timeout = 60000) => {
        return cy.request({
            'method': 'GET',
            'url': address(url, path),
            'headers': reqHeader(header),
            'timeout': timeout,
            'failOnStatusCode': failOnStatusCode
        })
    },

    put: (url, path, header = [], body = {}, failOnStatusCode = false, timeout = 60000) => {
        return cy.request({
            'method': 'PUT',
            'url': address(url, path),
            'headers': reqHeader(header),
            'body': body,
            'timeout': timeout,
            'failOnStatusCode': failOnStatusCode
        })
    },

    del: (url, path, header = [], failOnStatusCode = false, timeout = 60000) => {
        return cy.request({
            'method': 'DELETE',
            'url': address(url, path),
            'headers': reqHeader(header),
            'timeout': timeout,
            'failOnStatusCode': failOnStatusCode
        })
    }
}
