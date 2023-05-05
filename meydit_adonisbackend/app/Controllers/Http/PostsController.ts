import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreatePostValidator from 'App/Validators/CreatePostValidator';
import Post from 'App/Models/Post'


export default class PostsController {
  public async index(ctx: HttpContextContract) {
    const users = await Post
      .query()
      .preload('user')
    return users;
  }

  public async show({params}) {
    const posts = await Post
      .query()
      .preload('user')
    
    const post = posts.filter((x, i)=> {
      return x.id == params.id
    })
    return post;
  }

  public async store({response, request}) {
    try {
        const payload = await request.validate(CreatePostValidator);
        Post.create(payload)
        return payload;
      } catch (error) {
        response.badRequest(error.messages)
      }
  }

  public async update({ request, params }) {
    const payload = await request.validate(CreatePostValidator);
    await Post.query().where('id', params.id).update(payload);
    return payload;
  }

  public async destroy({ response, params }) {
      const user = await Post.findBy('id', params.id);
      if(user){
          user.delete()
      }
      return response.send("deleted successfully");
  }

  public async edit({}: HttpContextContract) {}

}
