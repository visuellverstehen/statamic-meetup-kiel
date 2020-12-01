const mix = require('laravel-mix');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/site.js', 'public/js')
mix.postCss('resources/css/tailwind.css', 'public/css', [
  require('postcss-import'),
  require('tailwindcss'),
  require('postcss-nested'),
  require('postcss-preset-env')({stage: 0})
])

if (mix.inProduction()) {
  mix.version();
  mix.purgeCss({
    enabled: true,
    whitelistPatternsChildren: [/^content$/],
  });
}

if (! mix.inProduction()) {
  mix.browserSync({
    proxy: 'https://statamic-meetup-kiel.test',
    notify: false,
    open: false,
    https: true,
    files: [
      'app/**/*',
      'public/**/*',
      'resources/views/**/*',
      'resources/css/**/*',
      'resources/js/**/*',
      'resources/lang/**/*',
      'routes/**/*'
    ],
  });
}

