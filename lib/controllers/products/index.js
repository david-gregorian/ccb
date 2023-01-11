const { Product } = require('../../entities/products')

exports.products_get = (req, res) => {

	const resource = new Product()

	resource.getAll()
		.then((products) => {
			res.status(200).json(products)
		})
		.catch((err) => {
			console.log(err)
			res.status(500).json({ msg: 'Internal Server Error' })
		})
}

exports.product_get_one = (req, res) => {

	const resource = new Product()

	resource.getById(req.params.id)
		.then((product) => {
			res.status(200).json(product)
		})
		.catch((err) => {
			if (err.message === 'not_found') {
				return res.sendStatus(404)
			}

			res.status(500).json({ msg: 'Internal Server Error' })
		})
}


exports.products_get_by_category = (req, res) => {

	const resource = new Product()

	resource.getProductsByCategory(req.params.id)
		.then((products) => {
			res.status(200).json(products)
		})
		.catch((err) => {
			if (err.message === 'not_found') {
				return res.sendStatus(404)
			}

			res.status(500).json({ msg: 'Internal Server Error' })
		})
}
