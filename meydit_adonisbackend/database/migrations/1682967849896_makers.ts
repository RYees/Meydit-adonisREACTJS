import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'makers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('firstname')
      table.string('lastname')
      table.string('phonenumber')
      table.integer('postcode')
      table.string('country')
      table.string('state')
      table.string('photo')
      table.string('email', 255).notNullable().unique()
      table.string('password', 180).notNullable()
      table.integer('amount')
      table.string('remember_me_token').nullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
