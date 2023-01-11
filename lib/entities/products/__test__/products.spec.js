const { Product } = require('../')

describe('ProductCategory ', function () {

	test('getProductsByCategory', async () => {

		const resource = new Product()

		const res = await resource.getProductsByCategory(1)

		//TODO: proqxyquire to mock the db connection

		// eslint-disable-next-line quotes
		const expected = [{"category": 1, "description": "A qualtiy t-shirt made of 100% cotton.", "id": 1, "image": "https://www.example.com/product1.jpg", "name": undefined, "price": 100}, {"category": 1, "description": "A qualtiy longsleeve shirt made of 100% cotton.", "id": 2, "image": "https://www.example.com/product2.jpg", "name": undefined, "price": 200}]

		expect(res).toEqual(expected)
	})

})
