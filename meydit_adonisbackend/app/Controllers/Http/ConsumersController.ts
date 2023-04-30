import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class ConsumersController {
    public async index(ctx: HttpContextContract) {
        const consumers = await Database.from("consumers").select("*");
        return consumers;
    }

    public async store({response, request}) {
        const createArticleSchema = schema.create({
            firstname: schema.string(),
            lastname: schema.string(),
            email: schema.string(),
            phonenumber: schema.string(),
            postcode: schema.number(),
            state: schema.string(),
            photo: schema.string.optional()
        });
        try {
            const payload = await request.validate({
              schema: createArticleSchema
            });
            await Database
                        .table('consumers').insert({
                            ...payload
                        });
            return payload;
          } catch (error) {
            response.badRequest(error.messages)
          }
    }
}
