import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './tshirt'
import './uniform'
import './ball'

Route.get('/', async () => {
  return { hello: 'world' }
})
