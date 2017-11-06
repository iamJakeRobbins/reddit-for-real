// name: text
// link:text
// votes:integer
exports.seed = function(knex, Promise) {
  return knex('hero').del()
    .then(function () {
  		const heros = [
				{
					name: 'Alex Puccio',
					link: 'https://en.wikipedia.org/wiki/Alex_Puccio'
				},
				{
					name: 'Tommy Caldwell',
					link: 'https://en.wikipedia.org/wiki/Tommy_Caldwell'
				},
				{
					name: 'Alex Honnold',
					link: 'https://en.wikipedia.org/wiki/Alex_Honnold'
				}
		]
			return knex('hero').insert(heros)
    });
};
