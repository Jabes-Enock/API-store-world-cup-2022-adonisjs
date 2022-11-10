import Route from '@ioc:Adonis/Core/Route'

Route.resource('/tshirts', 'TshirtsController')
  .apiOnly()
  .middleware({
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth']
  })
