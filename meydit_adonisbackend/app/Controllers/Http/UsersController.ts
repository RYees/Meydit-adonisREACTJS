import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import CreateUserValidator from 'App/Validators/CreateUserValidator';
// import Post from 'App/Models/Post';

export default class UsersController {
  public async index({}: HttpContextContract) {
    const users = await User.all()
    return users;
  }

  public async show({params}) {
    const users = await User
    .query()
    .preload('posts', (profileQuery) => {
      profileQuery.where('userId', params.id)
    })
    const user = users.filter((x, i)=> {
      return x.id == params.id
    })
    return user;
  }

  // public async searchBy({response,params}) {
  //   try {
  //     const users = await User
  //       .query()
  //       .preload('posts')
  //       .if(params.country, query => query.whereILike('country', `%${params.country}`))

  //   return users;      
      
  // } catch(error) {
  //   return response.send(error);
  // }
  // }


  public async update({ request, response, params }) {
      const payload = await request.validate(CreateUserValidator);
      await User.query().where('id', params.id).update(payload);
      return payload;
  }

  public async destroy({ response, params }) {
      const user = await User.findBy('id', params.id);
      if(user){
          user.delete()
      }
      return response.send("deleted successfully");
  }

  public async create({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}
}
