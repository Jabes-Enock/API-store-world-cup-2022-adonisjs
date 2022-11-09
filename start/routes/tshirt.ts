import Route from '@ioc:Adonis/Core/Route'

Route.resource('/tshirts', 'TshirtsController').apiOnly()
