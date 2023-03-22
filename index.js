require('dotenv').config()
const morgan = require ('morgan')
const express = require ('express')
const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASS , 'root', 'MyPass_SQL_23', {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: 3306,
    logging: false
})

const api = express()


const router = require('./api/routes')

api.use(morgan('dev'))
api.use(express.json())
api.use('/api', router)
api.listen(process.env.PORT, (err) => {
    if(err) throw new Error(`ERROR: Cannot run server on port ${process.env.PORT}\n`, err)
    console.info(`Express listening on port ${process.env.PORT}`)


    try {
        await sequelize.authenticate()
        console.log('Connection has been established succesfully')
    } catch (error) {
        console.error('ERROR: Unable to connect to the database:', error)
    }
})
