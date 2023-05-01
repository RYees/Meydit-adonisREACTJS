import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
// import { schema } from '@ioc:Adonis/Core/Validator'
import CreateConsumerValidator from 'App/Validators/CreateConsumerValidator';
import Consumer from 'App/Models/Consumer';

export default class ConsumersController {
    public async index(ctx: HttpContextContract) {
        const consumers = await Database.from("consumers").select("*");
        return consumers;
    }

    public async show({params }) {
        const consumer = await Consumer.findBy('id', params.id);
        return consumer;
    }

    public async store({response, request}) {
        try {
            const payload = await request.validate(CreateConsumerValidator);
            Consumer.create(payload)
            return payload;
          } catch (error) {
            response.badRequest(error.messages)
          }
    }

    // public async updateAll({ request, response }) {
    //     const payload = await request.validate(CreateConsumerValidator);
    //     await Database.from('consumers').update(payload)
    //        return response.redirect().back();
    // }

    public async update({ request, response, params }) {
        const payload = await request.validate(CreateConsumerValidator);
        await Consumer.query().where('id', params.id).update(payload);
        return payload;
    }

    public async destroy({ response, params }) {
        const consumer = await Consumer.findBy('id', params.id);
        if(consumer){
            consumer.delete()
        }
        return response.send("deleted successfully");
    }
}
