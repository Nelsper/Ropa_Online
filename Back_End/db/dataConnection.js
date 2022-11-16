
const username = 'User'
const pass = 'admin'
const dataBase = 'ClusterZamura'
const urlDataBase = `mongodb://${username}:${pass}@ac-f5ltrhh-shard-00-00.qmci5am.mongodb.net:27017,ac-f5ltrhh-shard-00-01.qmci5am.mongodb.net:27017,ac-f5ltrhh-shard-00-02.qmci5am.mongodb.net:27017/${dataBase}?ssl=true&replicaSet=atlas-bueipi-shard-0&authSource=admin&retryWrites=true&w=majority`

module.exports = { urlDataBase };