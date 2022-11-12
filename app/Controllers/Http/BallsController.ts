import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ball from 'App/Models/Ball'
import { StoreValidator, UpdateValidator } from 'App/Validators/Ball'

export default class BallsController {
  public async index({}: HttpContextContract) {
    const balls = await Ball.query().orderBy('id')
    return balls
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const ball = await Ball.create(data)
    return ball
  }

  public async show({ params }: HttpContextContract) {
    const ball = await Ball.findOrFail(params.id)
    return ball
  }

  public async update({ params, request }: HttpContextContract) {
    const ball = await Ball.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)
    ball.merge(data)
    await ball.save()
    return ball
  }

  public async destroy({ params }: HttpContextContract) {
    const ball = await Ball.findOrFail(params.id)
    await ball.delete()
  }
}
