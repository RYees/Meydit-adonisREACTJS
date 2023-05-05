import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateQuoteValidator from 'App/Validators/CreateQuoteValidator';
import Mail from '@ioc:Adonis/Addons/Mail'
import Quote from 'App/Models/Quote';
import Post from 'App/Models/Post';

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

  public async findMakerWork(value) {
    const maker = await Quote
      .query()
      .preload('maker')
    const tailor = maker.filter((x)=> {
      return x.id == value
    })
    
    return maker[0].maker.firstname;
  }

  public async findpost(value) {
    const posts = await Post
      .query()
      .preload('user')
    
    const post = posts.filter((x)=> {
      return x.id == value
    })
    return post[0].user.email;
  }

  public async store({response, request}) {
   try {
        const payload = await request.validate(CreateQuoteValidator);
        Quote.create(payload)
        const postuserEmail = await this.findpost(payload.postId);
        const postuserImages = await this.findMakerWork(payload.id);
        try {
        await Mail.send((message) => {
          message
            .from(payload.email)       
            .to(postuserEmail)
            .subject('You got an offer!')
            .htmlView('emails/quotepage', { payload, postuserImages })
        })
        return payload;
      } catch (error) {
        console.log(error)
      }
  
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
