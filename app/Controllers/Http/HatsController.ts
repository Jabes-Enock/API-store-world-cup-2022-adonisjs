import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hat from 'App/Models/Hat'
import { StoreValidator, UpdateValidator } from 'App/Validators/Hat'

export default class HatsController {
  public async index({}: HttpContextContract) {
    const hats = await Hat.query().orderBy('id')
    return hats
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const hat = await Hat.create(data)
    return hat
  }

  public async show({ params }: HttpContextContract) {
    const hat = await Hat.findOrFail(params.id)
    return hat
  }

  public async update({ params, request }: HttpContextContract) {
    const hat = await Hat.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)
    hat.merge(data)
    await hat.save()
    return hat
  }

  public async destroy({ params }: HttpContextContract) {
    const hat = await Hat.findOrFail(params.id)
    await hat.delete()
  }
}
