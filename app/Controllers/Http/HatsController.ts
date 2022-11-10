import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hat from 'App/Models/Hat'
import { StoreValidator, UpdateValidator } from 'App/Validators/Hat'

export default class HatsController {
  public async index({}: HttpContextContract) {
    const uniforms = await Hat.query().orderBy('id')
    return uniforms
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const uniform = await Hat.create(data)
    return uniform
  }

  public async show({ params }: HttpContextContract) {
    const uniform = await Hat.findOrFail(params.id)
    return uniform
  }

  public async update({ params, request }: HttpContextContract) {
    const uniform = await Hat.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)
    uniform.merge(data)
    await uniform.save()
    return uniform
  }

  public async destroy({ params }: HttpContextContract) {
    const uniform = await Hat.findOrFail(params.id)
    await uniform.delete()
  }
}
