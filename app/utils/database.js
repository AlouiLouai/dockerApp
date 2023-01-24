const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'lou_db',
    'louai',
    'password',
    {
        host: process.env.PGHOST,
        dialect: 'postgres'
    }
)

module.exports = sequelize