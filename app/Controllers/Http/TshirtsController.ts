import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TShirt from 'App/Models/Tshirt'
import { StoreValidator, UpdateValidator } from 'App/Validators/Tshirt'

export default class TShirtsController {
  public async index({}: HttpContextContract) {
    const TShirts = await TShirt.query().orderBy('id')
    return TShirts
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const tshirt = await TShirt.create(data)
    return tshirt
  }

  public async show({ params }: HttpContextContract) {
    const tshirt = await TShirt.findOrFail(params.id)
    return tshirt
  }

  public async update({ request, params }: HttpContextContract) {
    const tshirt = await TShirt.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)
    tshirt.merge(data)
    await tshirt.save()
    return tshirt
  }

  public async destroy({ params }: HttpContextContract) {
    const tshirt = await TShirt.findOrFail(params.id)
    await tshirt.delete()
  }
}
