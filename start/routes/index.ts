import Route from '@ioc:Adonis/Core/Route'
import './tshirt'

Route.get('/', async () => {
  return { hello: 'world' }
})
