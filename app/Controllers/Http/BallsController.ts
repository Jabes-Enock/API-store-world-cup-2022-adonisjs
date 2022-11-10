import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ball from 'App/Models/Ball'
import { StoreValidator, UpdateValidator } from 'App/Validators/Ball'

export default class BallsController {
  public async index({}: HttpContextContract) {
    const uniforms = await Ball.query().orderBy('id')
    return uniforms
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const uniform = await Ball.create(data)
    return uniform
  }

  public async show({ params }: HttpContextContract) {
    const uniform = await Ball.findOrFail(params.id)
    return uniform
  }

  public async update({ params, request }: HttpContextContract) {
    const uniform = await Ball.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)
    uniform.merge(data)
    await uniform.save()
    return uniform
  }

  public async destroy({ params }: HttpContextContract) {
    const uniform = await Ball.findOrFail(params.id)
    await uniform.delete()
  }
}
