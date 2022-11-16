
const username = 'User'
const pass = 'admin'
const dataBase = 'Zamura'
const urlDataBase = `mongodb+srv://${username}:${pass}@clusterzamura.qmci5am.mongodb.net/${dataBase}?retryWrites=true&w=majority`

module.exports = urlDataBase;