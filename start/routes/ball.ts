import Route from '@ioc:Adonis/Core/Route'

Route.resource('/balls', 'BallsController')
  .apiOnly()
  .middleware({
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth']
  })
