import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateQuoteValidator from 'App/Validators/CreateQuoteValidator';
import Quote from 'App/Models/Quote';

export default class QuotesController {
  public async index(ctx: HttpContextContract) {
    const quotes = await Quote
      .query()
      .preload('post')
      .preload('maker')
    return quotes;
  }

  public async show({params}) {
    const quotes = await Quote
      .query()
      .preload('post')
      .preload('maker')
    const quote = quotes.filter((x)=> {
      return x.id == params.id
    })
    return quote;
  }

  public async store({response, request}) {
    try {
        const payload = await request.validate(CreateQuoteValidator);
        Quote.create(payload)
        return payload;
      } catch (error) {
        response.badRequest(error.messages)
      }
  }

  public async update({ request, params }) {
    const payload = await request.validate(CreateQuoteValidator);
    await Quote.query().where('id', params.id).update(payload);
    return payload;
  }

  public async destroy({ response, params }) {
      const user = await Quote.findBy('id', params.id);
      if(user){
          user.delete()
      }
      return response.send("deleted successfully");
  }

}
