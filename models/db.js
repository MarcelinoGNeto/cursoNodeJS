const Sequelize = require('sequelize')
    // Conexão com o banco de dados MySql
    const sequelize = new Sequelize('postagens', 'root', '1234567',{
        host: 'localhost',
        dialect: 'mysql'
    })

    module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
    }