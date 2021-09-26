const { type } = require('os')
const db = require('./db')

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: { 
        type: db.Sequelize.TEXT
    }
})

// Post.sync({force: true}) //comentar ou apagar após a criação da tabela

module.exports = Post