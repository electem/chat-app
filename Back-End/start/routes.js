'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', ({ request, response }) => {
  response.json({
    greeting: 'Hello world in JSON'
  })
  //   return { greeting: 'Hello world in JSON' }
})

//employees  
Route.get('/api/users', 'UserController.fetchAllUsers')

//Messages
Route.post('api/sendMessage', 'MessageController.sendMessage')
Route.get('api/messages/:userId', 'MessageController.index')