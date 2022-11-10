import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }, [
      rules.unique({ table: 'balls', column: 'name' }),
      rules.minLength(2)
    ]),
    price: schema.number([rules.unsigned()]),
    image_url: schema.string({ trim: true }, [rules.url()]),
    description: schema.string({ trim: true }),
    category: schema.string({ trim: true })
  })

  public messages: CustomMessages = {}
}
