import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Env from '@ioc:Adonis/Core/Env'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.create({
      email: Env.get('USER_EMAIL'),
      password: Env.get('USER_PASSWORD')
    })
  }
}
