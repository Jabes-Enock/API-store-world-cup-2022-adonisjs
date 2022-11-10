import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator } from 'App/Validators/Auth'

export default class AuthController {
  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const token = await auth.attempt(data.email, data.password, { expiresIn: '30 days' })

    return token
  }

  public async destroy({ auth }: HttpContextContract) {
    await auth.logout()
  }
}
