import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class AuthController {
    public async register({ request, response, auth }: HttpContextContract) {
        try {
            const userSchema = schema.create({
                firstname: schema.string(),
                lastname: schema.string(),
                phonenumber: schema.string(),
                postcode: schema.number(),
                state: schema.string(),
                photo: schema.string(),
                email: schema.string([rules.email(), rules.trim()]),
                password: schema.string([rules.minLength(8)]),
                role_id: schema.number()
            })
            
            const data = await request.validate({ schema: userSchema })
            const user = await User.create(data)

            await auth.login(user)
            return response.send(data)
        } catch(error) {
            return response.send(error);
        }
    }

    public async login({ request, response, auth }: HttpContextContract) {
        const { email, password } = request.only(['email', 'password'])
        try {
            await auth.attempt(email, password)
            return response.send("logged in")
        } catch(error){
            //session.flash('errors', 'Email or password is incorrect')
            return response.send(error)
        }

        return response.redirect().toPath('/')
    }

    public async logout({ response, auth }: HttpContextContract) {
        await auth.logout()
        return response.status(200)
    }
}
