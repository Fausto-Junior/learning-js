const mountURL = (path) => {
	return 'https://api.pagar.me/1' + path + '?api_key=' + process.env.API_KEY
}

module.exports.mountURL = mountURL