
exports.up = function(knex) {
  return knex.schema 
  .createTable('stores', tbl => {
      tbl.increments(); // unique ID & primary key
      tbl.string('store_name', 128)
      .unique()
      .notNullable();
      tbl.string('location', 128);
      tbl.boolean('completed')
      .defaultTo(false);
  })
  .createTable('groceries', tbl => {
      tbl.increments();
      tbl.string('grocery_name', 128)
      .unique()
      .notNullable();
      tbl.boolean('completed')
      .defaultTo(false);
      // foreign key
      tbl.integer('store_id')
      .unsigned() // not negative
      .notNullable()
      .references('id')
      .inTable('stores')
      .onDelete('CASCADE') // if this is RESTRICT then you must delete the groceries before the store
      .onUpdate('CASCADE');
  })
  .createTable('supplies', tbl => {
      tbl.increments();
      tbl.string('supply_name', 128)
      .unique()
      .notNullable();
      tbl.boolean('in_use')
      .defaultTo(false);
  })
  .createTable('store_supplies', tbl => {
      tbl.increments();
      // foreign key that connects to the store table
      tbl.integer('store_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('stores')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
      // foreign key that connects to the supplies table
      tbl.integer('supplies_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('supplies')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('store_supplies')
  .dropTableIfExists('supplies')
  .dropTableIfExists('groceries')
  .dropTableIfExists('stores');
};
