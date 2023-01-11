const supertest = require('supertest')
const express = require('express')

const routes = require('../../routes')


const app = new express()
app.use('/api', routes)

describe('Route handlers', function () {

	test('getAll products', async () => {
		const res = await supertest(app)
			.get('/api/v0/products')

		expect(res.header['content-type']).toBe('application/json; charset=utf-8')
		expect(res.statusCode).toBe(200)
		expect(res.text).toEqual('[{"id":1,"price":100,"description":"A qualtiy t-shirt made of 100% cotton.","category":1,"image":"https://www.example.com/product1.jpg"},{"id":2,"price":200,"description":"A qualtiy longsleeve shirt made of 100% cotton.","category":1,"image":"https://www.example.com/product2.jpg"},{"id":3,"price":300,"description":"A qualtiy trowser made from finest cotton.","category":2,"image":"https://www.example.com/product3.jpg"},{"id":4,"price":400,"description":"Super cool short pants.","category":2,"image":"https://www.example.com/product4.jpg"}]')
	})

	test('getById product', async () => {
		const res = await supertest(app)
			.get('/api/v0/products/1')

		expect(res.header['content-type']).toBe('application/json; charset=utf-8')
		expect(res.statusCode).toBe(200)
		expect(res.text).toEqual('{"id":1,"price":100,"description":"A qualtiy t-shirt made of 100% cotton.","category":1,"image":"https://www.example.com/product1.jpg"}')

	})

	test('getById wrong product', async () => {
		const res = await supertest(app)
			.get('/api/v0/products/5')

		expect(res.statusCode).toBe(404)
	})

	test('getProductsByCategory product', async () => {
		const res = await supertest(app)
			.get('/api/v0/product_categories/1/products')

		expect(res.header['content-type']).toBe('application/json; charset=utf-8')
		expect(res.statusCode).toBe(200)
		expect(res.text).toEqual('[{"id":1,"price":100,"description":"A qualtiy t-shirt made of 100% cotton.","category":1,"image":"https://www.example.com/product1.jpg"},{"id":2,"price":200,"description":"A qualtiy longsleeve shirt made of 100% cotton.","category":1,"image":"https://www.example.com/product2.jpg"}]')

	})

	test('getProductsByCategory wrong product category', async () => {
		const res = await supertest(app)
			.get('/api/v0/product_categories/5/products')

		expect(res.statusCode).toBe(404)
	})

	test('getAll product categories', async () => {
		const res = await supertest(app)
			.get('/api/v0/product_categories')

		expect(res.header['content-type']).toBe('application/json; charset=utf-8')
		expect(res.statusCode).toBe(200)
		expect(res.text).toEqual('[{"id":1,"name":"Category 1"},{"id":2,"name":"Category 2"}]')
	})

	test('getById product category', async () => {
		const res = await supertest(app)
			.get('/api/v0/product_categories/1')

		expect(res.header['content-type']).toBe('application/json; charset=utf-8')
		expect(res.statusCode).toBe(200)
		expect(res.text).toEqual('{"id":1,"name":"Category 1"}')

	})

	test('getById wrong product category', async () => {

		const res = await supertest(app)
			.get('/api/v0/product_categories/5')

		expect(res.statusCode).toBe(404)
	})
})
