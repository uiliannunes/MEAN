
// config/express.js
var load = require('express-load');
var home = require('../app/routes/home');
var express = require('express');

module.exports = function() {
    var app = express();
    
    // variável de ambiente
    app.set('port', 3000);

    // middleware
  	app.use(express.static('./public'));


	// abaixo do middleware express.static
	app.set('view engine', 'ejs');
	app.set('views','./app/views');

	load('models', {cwd: 'app'})
  	.then('controllers')
  	.then('routes')
  	.into(app);
  	
  	return app;
};