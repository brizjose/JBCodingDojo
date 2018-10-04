const user_controller = require('../controllers/users');


//doing restful routing, with root route redirecting to '/users', which is the main page in a restful structure
module.exports = function(app) {
    app.get('/', (request,response) => response.redirect('/users'));
    app.get('/users', user_controller.index);
    app.get('/users/new', user_controller.new);
    app.get('/users/:id', user_controller.show);
    app.post('/users', user_controller.create);
    app.get('/users/:id/edit', user_controller.edit);
    app.post('/users/:id', user_controller.update);
    app.post('/users/:id/delete', user_controller.destroy);
    //task is to send the login model into its own models/login.js file, export it there and require it here
    app.post('/login', (request,response) => {
        User.findOne({email: request.body.email})
        .then(userInfo => {
            if (!userInfo) {
                throw new Error();
            }
            return User.validatePassword(request.body.password, userInfo.password)
                .then(() => {
                    //add session id
                })
        })
        .catch(error => {
            //re-render the form so user does not need to re-enter all the information.  If doing re-direct, they would have to type everything again
            response.render('/', {error: 'Email and password combination does not exist'})
        });
    });
    //logout:
    //do the routing as with previous examples above
    app.post('/logout', (request,response) => {

    });

    
};