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
        await Maker.create(payload)
        return payload;       
        
    } catch (error) {
      return response.send(error)
    }
  }

  public async update({ request, response, params }) {
    try {
      const payload = await request.validate(CreateMakerValidator);
      await Maker.query().where('id', params.id).update(payload);
      return payload;
    } catch (error) {
      return response.send(error)
    }
    
  }

  public async destroy({ response, params }) {
    try{
      const user = await Maker.findBy('id', params.id);
      if(user){
          user.delete()
      }
      return response.status(200);
    } catch (error) {
      return response.send(error)
    }
  }

  public async edit({}: HttpContextContract) {}

}
