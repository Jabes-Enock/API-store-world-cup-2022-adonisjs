import Route from '@ioc:Adonis/Core/Route'

Route.resource('/hats', 'hatsController')
  .apiOnly()
  .middleware({
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth']
  })
