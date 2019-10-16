const postcssNormalize = require('postcss-normalize');

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-preset-env'),
        require('cssnano'),
        postcssNormalize()
    ]
}