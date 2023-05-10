import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Maker from 'App/Models/Maker'



export default class AuthController {
    public async register({ request, response, auth }: HttpContextContract) {
        try {
            const makerSchema = schema.create({
                firstname: schema.string(),
                lastname: schema.string(),
                phonenumber: schema.string(),
                postcode: schema.number(),
                country: schema.string(),
                state: schema.string(),
                photo: schema.string(),
                email: schema.string([rules.email(), rules.trim()]),
                password: schema.string([rules.minLength(8)]),
                amount: schema.number()
            })
            
            const data = await request.validate({ schema: makerSchema })
            const maker = await Maker.create(data)

            //await auth.login(maker)
            await auth.use('maker').login(maker)
            return response.send(data)
        } catch(error) {
            return response.send(error);
        }
    }


    public async login({ request, response, auth }: HttpContextContract) {
        const { email, password } = request.only(['email', 'password'])
        try {
            await auth.use('maker').attempt(email, password)
            return auth
        } catch(error){
            //session.flash('errors', 'Email or password is incorrect')
            return response.send(error)
        }

        return response.redirect().toPath('/')
    }

    // public async login({ request, response, auth }: HttpContextContract) {
    //     const { email, password } = await request.validate(AuthValidator)
    //     await auth.use('maker').attempt(email, password)
    //     return response.redirect('/')
    //   }
    

    public async logout({ response, auth }: HttpContextContract) {
        await auth.logout()
        return auth
    }
}
