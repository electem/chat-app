'use strict'

const Env = use('Env')
const Helpers = use('Helpers')

module.exports = { 
  /*
  |--------------------------------------------------------------------------
  | MySQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for MySQL database.
  |
  | npm i --save mysql
  |
  */
  mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', '3306'),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', 'cybis@ban'),
      database: Env.get('DB_DATABASE', 'adonis')
    },
    debug: Env.get('DB_DEBUG', false)
  },
}
