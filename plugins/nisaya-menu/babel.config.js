module.exports = ( api ) => {
	api.cache(true);
	return {
		presets: [
			'@babel/preset-env',
			'@wordpress/babel-preset-default',
		],
	};
}
