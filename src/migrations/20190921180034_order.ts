import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('Orders', table => {
    table.increments('id').primary();
    table.integer('quantity', 150).notNullable();
    table.string('description', 50).nullable();
    table.float('value', 2, 2).notNullable();
    table.dateTime('createdDate').notNullable();
    table.dateTime('updatedDate').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('Orders');
}