'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypePropertySchema extends Schema {
  up () {
    this.create('type_properties', (table) => {
      table.increments()
      table.string('descricao', 250).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('type_properties')
  }
}

module.exports = TypePropertySchema
