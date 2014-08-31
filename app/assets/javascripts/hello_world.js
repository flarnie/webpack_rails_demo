var $ = require('jquery'),
    HelloWorldView = require('./views/hello_world_view');

// Any logic to initialize the app goes here
// For example, starting any routers or initializing the 'home' view
$(function() {
  HelloWorldView.render();
});
