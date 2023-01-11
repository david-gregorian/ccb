const deepFreeze = require('deep-freeze')

class APIConfig {
	base = 'http://localhost:3000'
}

module.exports = {
	/**
   * @type {ApiConfig}
   */
	api: deepFreeze(new APIConfig()),
}
