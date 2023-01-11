const productCategoriesData = require('./product_categories.json')

class ProductCategory {
	id = null
	name = null

	constructor(id, name) {
		this.id = id
		this.name = name
	}

	getAll () {
		return new Promise((resolve) => {
			const productCategories = productCategoriesData.map((productCategory) => {
				return new ProductCategory(
					productCategory.id,
					productCategory.name
				)
			})

			resolve(productCategories)
		})
	}

	getById (id) {
		return new Promise((resolve, reject) => {
			const productCategory = productCategoriesData.find((productCategory) => productCategory.id == id)

			if (productCategory) {
				resolve(new ProductCategory(
					productCategory.id,
					productCategory.name
				))
			} else {
				reject(new Error('not_found'))
			}
		})
	}
}

module.exports = {
	ProductCategory
}
