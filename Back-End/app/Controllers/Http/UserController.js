'use strict'
const User = use('App/Models/User')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Hash = use('Hash');

/**
 * Resourceful controller for interacting with users
 */
class UserController {

  
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async fetchAllUsers({ response }) {
    
    try {
      const users = await User.all()
      response.status(200).json({
        users: users
      })
    } catch (error) {
      response.send(error.message)
    }
  }
}

module.exports = UserController
