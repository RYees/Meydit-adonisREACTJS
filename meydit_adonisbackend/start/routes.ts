/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'

Route.get('/', async () => {
  return { hello: 'world' }
});

Route.post('/auth/consumers', 'AuthController.register').as('auth.register')
Route.post('/auth/login', 'AuthController.login').as('auth.login')
Route.get('/auth/logout', 'AuthController.logout').as('auth.logout')
// Route.post('/consumers/post', 'PostsController.store').as('posts.user')
// Route.get('/consumers/post/', 'PostsController.index').as('posts.users')
// Route.get('/consumers/post/:id', 'PostsController.show').as('posts.singleuser')
// Consumer data routes
//Route.resource("consumers", "ConsumersController").as("consumers").apiOnly();
Route.resource("consumers", "UsersController")
.as("users").apiOnly()
// .middleware({
// show: ["auth"],
// edit: ["auth"],
// update: ["auth"],
// create: ["auth"],
// store: ["auth"],
// destroy: ["auth"]
//});
Route.resource("posts", "PostsController")
.as("userposts").apiOnly()
// .middleware({
// show: ["auth"],
// edit: ["auth"],
// update: ["auth"],
// create: ["auth"],
// store: ["auth"],
// destroy: ["auth"]
// });


Route.resource("makers", "MakersController")
.as("maker").apiOnly()
// .middleware({
// show: ["auth"],
// edit: ["auth"],
// update: ["auth"],
// create: ["auth"],
// destroy: ["auth"]
// });  


Route.resource("quotes", "QuotesController")
.as("quote_post").apiOnly()
// .middleware({
// show: ["auth"],
// edit: ["auth"],
// update: ["auth"],
// create: ["auth"],
// store: ["auth"],
// destroy: ["auth"]
// });


// Consumer posts routes

// Quotes table



