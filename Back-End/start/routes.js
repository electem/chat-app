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

Route.get('/api/users', 'UserController.fetchAllUsers').middleware('auth')

//Messages
Route.post('api/sendMessage', 'MessageController.sendMessage').middleware('auth')
Route.get('api/messages/:userId', 'MessageController.index').middleware('auth')