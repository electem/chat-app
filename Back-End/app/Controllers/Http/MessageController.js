'use strict'

const Message = use('App/Models/Message')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with messages
 */
class MessageController {


  /**
 * Create/send a new message.
 * POST messages
 *
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 */
  async sendMessage({ request, response }) {
    const { user_id, message } = request.post()

    // save and get instance back
    const responseMessage = await Message.create({ user_id, message })

    response.status(201).json({
      message: 'Successfully sent a new message.',
      Message: responseMessage
    })
  }

  /**
   * Show a list of all messages.
   * GET messages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, params: { userId } }) {
    const message = await use('Database').from('messages').where('messages.user_id', userId)
    response.status(200).json({
      message: 'Here are your message',
      Message: message
    })
  }
}

module.exports = MessageController
