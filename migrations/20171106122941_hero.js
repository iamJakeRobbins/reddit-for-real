// name: text
// link:text
// votes:integer
exports.up = function(knex, Promise) {
	return Promise.all([
		knex.schema.createTable('hero', (table) =>{
			table.increments().primary
			table.text('name').notNullable()
			table.text('link').notNullable()
			table.integer('votes').defaultTo(0).notNullable()
		})
	])
};

exports.down = function(knex, Promise) {
	return Promise.all([
		knex.schema.dropTable('hero')
	])
};
