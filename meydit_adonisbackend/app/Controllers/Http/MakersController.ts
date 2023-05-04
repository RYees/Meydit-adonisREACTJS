import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateMakerValidator from 'App/Validators/CreateMakerValidator';
import Quote from 'App/Models/Quote';
import Maker from 'App/Models/Maker';

export default class MakersController {
  public async index(ctx: HttpContextContract) {
    const users = await Maker
      .query()
      .preload('quotes')
    return users;
  }

  public async show({params}) {
    const makers = await Maker
      .query()
      .preload('quotes')
    
    const maker = makers.filter((x)=> {
      return x.id == params.id
    })
    return maker;
  }

  public async store({response, request}) {
    const payload = await request.validate(CreateMakerValidator);
    try {  
      if(!Maker.create(payload)){
        response.send("email duplicated")
      }  {
        return payload;
      }   
        
        
      } catch (error) {
        response.badRequest(error.messages)
      }
  }

  public async update({ request, params }) {
    const payload = await request.validate(CreateMakerValidator);
    await Maker.query().where('id', params.id).update(payload);
    return payload;
  }

  public async destroy({ response, params }) {
      const user = await Maker.findBy('id', params.id);
      if(user){
          user.delete()
      }
      return response.send("deleted successfully");
  }

  public async edit({}: HttpContextContract) {}

}
