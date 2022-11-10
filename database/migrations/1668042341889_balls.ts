import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'balls'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable().unique()
      table.decimal('price').notNullable().unsigned()
      table.string('image_url').notNullable()
      table.text('description', 'mediumtext').notNullable()
      table.string('category').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
