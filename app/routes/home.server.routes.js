var controller = require('../../app/controllers/home.server.controller');
    
module.exports = function(app) {
    
    app.get('/', controller.index);

    app.get('/login', controller.loginGet);

    app.post('/login', controller.loginPost);
	
};