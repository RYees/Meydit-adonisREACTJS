import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreatePostValidator from 'App/Validators/CreatePostValidator';
import Application from "@ioc:Adonis/Core/Application";
import Post from 'App/Models/Post'

export default class PostsController {
  public async index({response},ctx: HttpContextContract) {
    try{
      const posts = await Post
        .query()
        .preload('quotes')
      return posts;
    }  catch(error) {
      return response.send(error);
    }
  }

  public async show({response,params}) {
    try {
      const posts = await Post
        .query()
        .preload('quotes')
      //   .firstOrFail()
      //  // 
      // console.log(posts.$extras.totalPosts)
      const post = posts.filter((x, i)=> {
        return x.id == params.id
      })
      
      return post;
  } catch(error) {
    return response.send(error);
  }
  }

  public async store({response, request}: HttpContextContract) {
    try {
      const py = request.file('images')
      if (!py) {
        //await payload.images.move(Application.tmpPath('uploads'))
        return 'please upload file'
      }
      const path = await py.move(Application.tmpPath('uploads'))
      console.log(path);
        return path
      
        const payload = await request.validate(CreatePostValidator);
        // payload.images = request.file('images')

       
        // const path = await py.move(Application.tmpPath('uploads'))
        // return path
        // const payload = await request.validate(CreateArticleValidator);
       // const data = await request.validate(payload)
      //  await payload.images.move(Application.publicPath("postimages"));
      //  payload.images = payload.images.fileName;
        //await Post.create(payload)
        //return response.send(payload);
        return response.send(payload.images)
      
      } catch(error) {
          return response.send(error);
      }
  }

  public async update({ request,response, params }) {
    try {
      const payload = await request.validate(CreatePostValidator);
      await Post.query().where('id', params.id).update(payload);
      return payload;
    } catch(error) {
      return response.send(error);
    }
    
  }

  public async destroy({ response, params }) {
    try{
      const user = await Post.findBy('id', params.id);
      if(user){
          user.delete()
      }
      return response.send("deleted successfully");
    } catch(error) {
      return response.send(error);
    }
  }

  public async edit({}: HttpContextContract) {}

}
