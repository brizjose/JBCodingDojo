const mongoose = require('mongoose');
const User = mongoose.model('User'); //getter

//make methods to control access to our user information - Restful routing
module.exports = {
    index(request, response) {
        response.render('index');
    },
    new(request, response) {
        response.render('new_user_form') 
    },
    show(request, response) {
        //retrieves single resource (User.findOne())
    },
    create(request,response) {
        //create new user in DB with form method='post'
        User.create(request.body)
        .then(user => {
            //send an email to validate or confirm registration
            //in this case, just render dashbord
            response.redirect(`/users/${user._id}`)
        })
        .catch(error => {
            //handle validation errors
        });
    },
    update(request, response) {},
    edit(request, response) {},
    destroy(request, response) {},
    logout(request, response) {},
};

