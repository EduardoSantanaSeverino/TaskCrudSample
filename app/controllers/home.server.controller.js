
exports.index = function(req, res) {
	res.render('home/index');
};

exports.loginGet = (req, res) => {
    res.render('home/login');
};

exports.loginPost = (req, res) => {

    // Student.findOne({
    //     email: req.body.email, //finding a document by studentname
    //     password: req.body.password
    // }, (err, student) => {
    //     if (err) {
    //         // Call the next middleware with an error message
    //         return next(err);
    //     } else {
    //         req.session.student = student;
    //         //make a reference to the session object
    //         //res.redirect('/comments/create');
    //     }
    // });

};