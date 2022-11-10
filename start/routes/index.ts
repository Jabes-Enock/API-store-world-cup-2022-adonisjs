import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './tshirt'

Route.get('/', async () => {
  return { hello: 'world' }
})
