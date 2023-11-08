import { Pool } from '/pg'

const pool = new Pool ({
    username: 'coltenyorgason',
    password: 'Yorgie92$',
    database: 'sequelize_db',
    host: '127.0.0.1',
    port: '5173'
})

module.export = pool;