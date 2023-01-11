
const { ProductCategory } = require('../../entities/product_categories')

exports.product_categories_get = (req, res) => {

	const resource = new ProductCategory()

	resource.getAll()
		.then((productCategories) => {
			res.status(200).json(productCategories)
		})
		.catch((err) => {
			console.log(err)
			res.status(500).json({ msg: 'Internal Server Error' })
		})
}


exports.product_categories_get_one = (req, res) => {

	const resource = new ProductCategory()

	resource.getById(req.params.id)
		.then((productCategory) => {
			res.status(200).json(productCategory)
		})
		.catch((err) => {
			if (err.message === 'not_found') {
				return res.sendStatus(404)
			}

			res.status(500).json({ msg: 'Internal Server Error' })
		})
}
