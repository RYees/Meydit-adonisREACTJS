import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'quotes'
  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('price')
      table.string('comments')
      table.string('email')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.integer('maker_id').unsigned().references('id').inTable('makers')
      table.integer('post_id').unsigned().references('id').inTable('posts')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
