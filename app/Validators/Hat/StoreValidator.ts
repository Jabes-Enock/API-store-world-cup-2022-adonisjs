import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string([
      rules.trim(),
      rules.unique({ table: 'hats', column: 'name' }),
      rules.minLength(2)
    ]),
    price: schema.number([rules.unsigned()]),
    image_url: schema.string([rules.trim(), rules.url()]),
    description: schema.string([rules.trim()]),
    category: schema.string([rules.trim()])
  })

  public messages: CustomMessages = {}
}
