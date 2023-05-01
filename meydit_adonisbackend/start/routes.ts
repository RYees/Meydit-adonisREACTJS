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

Route.post('/auth/register', 'AuthController.register').as('auth.register')
Route.post('/auth/login', 'AuthController.login').as('auth.login')
Route.get('/auth/logout', 'AuthController.logout').as('auth.logout')
// Consumer data routes
// Route.post('/consumersignup', 'ConsumersController.store').as("consumers.store");
// Route.get('/consumers', 'ConsumersController.index').as("consumers");
// Route.get('/consumers/:id','ConsumersController.edit').as("consumer.edit");
//Route.patch('/con/:id', "ConsumersController.update").as("consumer.update");
// Route.delete('/consumers:slug', "ConsumersController.destroy").as("consume.delete");
Route.resource("consumers", "ConsumersController").as("consumers").apiOnly();
Route.resource("users", "UsersController").as("users").apiOnly();

// Consumer posts routes
Route.post('/posts', ({ response }) => {
  return response.redirect('/posts');
}).as("consumers.post");

Route.patch('/posts:id', ({ params }) => {
  return {params};
}).where("id", {
    match: /^[0-9]+$/,
    cast: (id) => Number(id),
}).as("post_update");

Route.delete('/posts:id', ({ params }) => {
  return {params};
}).where("id", {
    match: /^[0-9]+$/,
    cast: (id) => Number(id),
}).as("post_delete");


// Maker(tailor) data
Route.post('/tailorsignup', ({ response }) => {
  return response.redirect('/tailorsignup');
}).as("maker.signup");

Route.get('/tailors', async () => {
  const consumers = await Database.from("tailors").select("*");
  return consumers;
}).as("makers");

Route.patch('/tailors:id', ({ params }) => {
  return {params};
}).where("id", {
    match: /^[0-9]+$/,
    cast: (id) => Number(id),
}).as("maker_update");

Route.delete('/tailors:id', ({ params }) => {
  return {params};
}).where("id", {
    match: /^[0-9]+$/,
    cast: (id) => Number(id),
}).as("maker_delete");

 
// Quotes table
Route.post('/tailorquotes', ({ response }) => {
  return response.redirect('/tailorquote');
}).as("maker.quote");

Route.get('/quotes', async () => {
  const consumers = await Database.from("tailorquotes").select("*");
  return consumers;
}).as("makersquote");


