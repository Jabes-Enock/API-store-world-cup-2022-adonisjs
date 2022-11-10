import Route from '@ioc:Adonis/Core/Route'

Route.resource('/uniforms', 'UniformsController')
  .apiOnly()
  .middleware({
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth']
  })
