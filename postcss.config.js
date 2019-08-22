const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./**/*.html', 'assets/dist/main.js'],
    whitelistPatterns: [/uk-animation-/],
    defaultExtractor: content => content.match(/[\w-/:@]+(?<!:)/g) || []
});


module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production' ? [purgecss] : []
    ]
}