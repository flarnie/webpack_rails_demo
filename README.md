#Webpack with Rails Demo

This demonstration was written to go with the related blog post,
[Setting Up Webpack With Rails][webpack-with-rails-post]

[webpack-with-rails-post]: https://medium.com/brigade-engineering/setting-up-webpack-with-rails-c62aea149679

## HOW TO SET UP WEBPACK WITH RAILS:
1. Set up your initial Rails project as usual.  [1][1]
2. `npm init` to generate your `package.json`
3. `sudo npm install webpack --save` to install webpack, and similarly install
any other libraries or [webpack loaders][webpack-loaders] you want.  [2-4][2-4]
4. [Decide whether to check your dependencies into version control][commit-modules].
5. Write your webpack.config.  [5][5] (Documentation [here][webpack-config-docs].)
6. In `app/assets/javascripts/application.js` change the require statements to
require your bundled JS file instead of requiring all files in the directory:
```javascript
require_tree . => require main.bundle
```
7. Whatever script initializes your JS application, (often `init.js` or
`index.js` or `my_app.js`), require that in your webpack entry point.
8. Use [CommonJS][common-js] or [AMD][amd] statements to load dependencies in
your JS files.  [6-8][6-8]
9. `webpack -wc` to generate or re-generate your bundled JS.  [9][9]

To run the project locally (assuming you have Ruby 2.1.1 and Rails 4):
 * `bundle`
 * `rails s`

[1]: https://github.com/flarnie/webpack_bower_demo/commit/e237d090e55d53de7c9e54db77235b030035f895
[webpack-loaders]: http://webpack.github.io/docs/using-loaders.html
[2-4]: https://github.com/flarnie/webpack_bower_demo/commit/f64534a20278078394b2bfbe3fd4be5b18a54524
[commit-modules]: http://addyosmani.com/blog/checking-in-front-end-dependencies/
[5]: https://github.com/flarnie/webpack_bower_demo/commit/8c0ce125dc1b620533907c3ea6b14b0bdb9f4ed1
[webpack-config-docs]: http://webpack.github.io/docs/configuration.html
[common-js]: http://wiki.commonjs.org/wiki/Modules/1.1.1
[amd]: https://github.com/amdjs/amdjs-api
[6-8]: https://github.com/flarnie/webpack_bower_demo/commit/6e6e8dbd84ed013b2b97c63474665990891cc4d4
[9]: https://github.com/flarnie/webpack_bower_demo/commit/c275c253f5676d92f92dc358028b838033773f72
