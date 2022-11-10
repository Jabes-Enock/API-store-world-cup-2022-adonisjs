import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Uniform from 'App/Models/Uniform'
import { StoreValidator, UpdateValidator } from 'App/Validators/Uniform'

export default class UniformsController {
  public async index({}: HttpContextContract) {
    const uniforms = await Uniform.query().orderBy('id')
    return uniforms
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const uniform = await Uniform.create(data)
    return uniform
  }

  public async show({ params }: HttpContextContract) {
    const uniform = await Uniform.findOrFail(params.id)
    return uniform
  }

  public async update({ params, request }: HttpContextContract) {
    const uniform = await Uniform.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)
    uniform.merge(data)
    await uniform.save()
    return uniform
  }

  public async destroy({ params }: HttpContextContract) {
    const uniform = await Uniform.findOrFail(params.id)
    await uniform.delete()
  }
}
