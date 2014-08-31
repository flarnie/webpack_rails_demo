var $ = require('jquery');

var firstPar = $('<p>'),
    textStart = $('<span>').text("You're using "),
    webpackURL = 'http://webpack.github.io/',
    webpackLink = $('<a>').attr('href', webpackURL).text('webpack'),
    textEnd = $('<span>').text(' with Rails.'),
    es6text = 'ES6',
// The ES6 loader will compile this template string into the ES5 equivalent.
    es6Par = $('<p>').text(
      `You can also use ${es6text} features with the ES6 loader.`
    );

firstPar.append(textStart).append(webpackLink).append(textEnd);

var HelloWorldView = {
  render: function() {
    $('.main').append(firstPar).append(es6Par);
  }
};

module.exports = HelloWorldView;
