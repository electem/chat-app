'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {
  message() {
    return this.hasMany('App/Models/Message')
  }
}
module.exports = User
