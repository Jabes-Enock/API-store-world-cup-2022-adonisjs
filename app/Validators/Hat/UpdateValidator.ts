import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string([rules.trim()]),
    price: schema.number([rules.unsigned()]),
    image_url: schema.string([rules.trim(), rules.url()]),
    description: schema.string([rules.trim()]),
    category: schema.string([rules.trim()])
  })

  public messages: CustomMessages = {}
}