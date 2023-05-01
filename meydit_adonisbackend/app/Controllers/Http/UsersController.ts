import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    const users = await User.all()
    return users;
  }

  public async show({params }) {
    const users = await User.findBy('id', params.id);
    return users;
  }

  public async store({response, request}) {
      try {
          const payload = await request.validate(CreateConsumerValidator);
          User.create(payload)
          return payload;
        } catch (error) {
          response.badRequest(error.messages)
        }
  }

  public async update({ request, response, params }) {
      const payload = await request.validate(CreateConsumerValidator);
      await User.query().where('id', params.id).update(payload);
      return payload;
  }

  public async destroy({ response, params }) {
      const User = await User.findBy('id', params.id);
      if(consumer){
          User.delete()
      }
      return response.send("deleted successfully");
  }

  public async create({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}
}
