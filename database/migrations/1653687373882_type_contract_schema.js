'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeContractSchema extends Schema {
  up () {
    this.create('type_contracts', (table) => {
      table.increments()
      table.string('descricao', 250).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('type_contracts')
  }
}

module.exports = TypeContractSchema
