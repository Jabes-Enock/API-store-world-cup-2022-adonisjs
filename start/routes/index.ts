import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './tshirt'
import './uniform'
import './ball'
import './hat'

Route.get('/', async () => {
  return { hello: 'Welcome to Store World Cup API' }
})
