module.exports = {
    generateRandomString: (size = 1, format = 'text') => {
        let text = ''
        let possible = ''
        switch (format) {
            case 'UpperCase':
                possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                break
            case 'LowerCase':
                possible = 'abcdefghijklmnopqrstuvwxyz'
                break
            case 'number':
                possible = '0123456789'
                break
            default:
                possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        }

        for (let i = 0; i < size; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        return text
    }
}
