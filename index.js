const express = require('express')
const routes = require('./lib/routes')

// const isProd = process.env.NODE_ENV === 'production'
// const host = isProd ? process.env.HOST || '0.0.0.0' : process.env.HOST || undefined
const port = process.env.PORT || 3000

const app = express()

app.use(function(req, res, next) {
	console.log(`${req.method} ${req.url}`)
	next()
})

app.get('/', function (req, res) {
	res.status(200).json({ msg: 'ok' })
})

app.use('/api', routes)

const server = app.listen(port, function () {
	let host = server.address().address
	let port = server.address().port

	console.log('Server listening at http://%s:%s', host, port)
})
