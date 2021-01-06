'use strict'
const Message = use('App/Models/Message')

class FindChats {
  async handle({ request, response, params: { id } }, next) {
    // call next to advance the request
    const message = await Message.find(id)

    if (!message) {
      return response.status(404).json({
        message: 'message not found.',
        id
      })
    }

    request.body.message = message

    await next()
  }
}

module.exports = FindChats
