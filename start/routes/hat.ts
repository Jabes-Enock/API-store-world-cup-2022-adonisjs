import Route from '@ioc:Adonis/Core/Route'

Route.resource('/hats', 'HatsController')
  .apiOnly()
  .middleware({
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth']
  })
