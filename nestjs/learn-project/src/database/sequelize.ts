import { Sequelize } from 'sequelize-typescript'
import db from '../config/db'

const sequelize = new Sequelize(db.mysql.database, db.mysql.username, db.mysql.password || null, {
    host: db.mysql.host,
    port: db.mysql.port,
    dialect: 'mysql',
    timezone: '+08:00'
})


sequelize.authenticate()
    .then(() => {
        console.log('database connect')
    })
    .catch((err) => {
        console.log(err);
        throw err
    })


export default sequelize
