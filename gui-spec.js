describe('function initSearchByName', function()
{
	it('finds Billy Bob', function()
  {
		var person = initSearchByName("Billy","Bob");
		expect(person.id).toEqual("272822514");
	});
});
