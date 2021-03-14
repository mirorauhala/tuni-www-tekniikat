const mix = require('laravel-mix');
const Fiber = require("fibers");

mix.js('resources/js/app.js', 'dist/js').vue({ version: 2 })
	.sass('resources/sass/style.scss', 'dist/css')
    .options({
        fiber: Fiber,
        processCssUrls: false,
    })
    .sourceMaps()
    .webpackConfig(require('./webpack.config'));

