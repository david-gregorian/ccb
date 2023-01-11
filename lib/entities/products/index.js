const productsData = require('./products.json')

class Product {
	id = null
	name = null
	price = null
	description = null
	category = null
	image = null

	constructor(id, name, price, description, category, image) {
		this.id = id
		this.name = name
		this.price = price
		this.description = description
		this.category = category
		this.image = image
	}

	serialize () {
		return {
			id: this.id,
			name: this.name,
			price: this.price,
			description: this.description,
			category: this.category,
			image: this.image
		}
	}

	getAll () {
		return new Promise((resolve) => {

			const products = productsData.map((product) => {
				return new Product(
					product.id,
					product.name,
					product.price,
					product.description,
					product.category,
					product.image
				)
			})

			resolve(products)
		})
	}

	getById (id) {

		return new Promise((resolve, reject) => {

			const foundProduct = productsData.find((product) => {
				return product.id == id
			})

			if (foundProduct) {
				resolve(new Product(
					foundProduct.id,
					foundProduct.name,
					foundProduct.price,
					foundProduct.description,
					foundProduct.category,
					foundProduct.image
				))
			} else {
				reject(new Error('not_found'))
			}
		})
	}

	getProductsByCategory (id) {
		return new Promise((resolve, reject) => {
			const products = productsData.filter((product) => product.category == id)


			if (Array.isArray(products) && products.length > 0) {
				resolve(products.map((product) => {
					return new Product(
						product.id,
						product.name,
						product.price,
						product.description,
						product.category,
						product.image
					)
				}))
			} else {
				reject(new Error('not_found'))
			}
		})
	}
}

module.exports = {
	Product
}
