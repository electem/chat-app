'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MessagesSchema extends Schema {
  up() {
    this.create('messages', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      table
        .foreign('user_id')
        .references('users.id')
        .onDelete('cascade')
      table.string('message', 254)
      table.timestamps()
      table.date('deleted_at')
      table.boolean('showMessage')
    })
  }

  down() {
    this.drop('messages')
  }
}

module.exports = MessagesSchema
