'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('gender', 254)
      table.string('image', 254)
      table.string('password', 254)
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UsersSchema
