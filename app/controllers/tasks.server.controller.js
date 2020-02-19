// Load the 'task' Mongoose model
const Task = require('mongoose').model('Task');

exports.createGet = function (req, res) {

    res.render('tasks/create');

}; 

exports.createPost = function (req, res, next) {
    // Create a new instance of the 'task' Mongoose model
    const task = new Task(req.body);

    task.save((err) => {
        if (err) {
            // Call the next middleware with an error message
            console.log(err);
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            //res.json(task);
            res.redirect('/');
        }
    });
};

exports.listAll = function (req, res, next) {
    // Use the 'task' static 'find' method to retrieve the list of tasks
    Task.find({}, (err, tasks) => {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {

            res.render('tasks/list', {
                tasks: tasks
            });

        }
    });
};

exports.updatePost = function (req, res, next) {

    var taskToUpdate = {
        "taskId": req.body.taskId,
        "taskName": req.body.taskName,
        "taskDescription": req.body.taskDescription,
        "startDate": req.body.startDate,
        "endDate": req.body.endDate,
        "owner": req.body.owner
    }

    Task.findOneAndUpdate({ "taskId": req.params.id }, taskToUpdate, { new: true }, (err, task) => {
        if (err) {
            console.log(err);
            // Call the next middleware with an error message
            return next(err);
        } else {
            console.log(task);
        
            // Use the 'response' object to send a JSON response
            res.redirect('/tasks'); //display all tasks
        }
    });
};

exports.deletePost = function (req, res, next) {

    Task.findOneAndRemove({ "taskId": req.params.id }, (err, task) => {
        if (err) {
            console.log(err);
            // Call the next middleware with an error message
            return next(err);
        } else {
            console.log(task);
        
            // Use the 'response' object to send a JSON response
            res.redirect('/tasks'); //display all tasks
        }
    });

};

exports.detailsGet = function (req, res, next) {
	// Use the 'Course' static 'findOne' method to retrieve a specific task
	Task.findOne({
		id: req.params.id //using the task id instead of id
	}, (err, task) => {
		if (err) {
			// Call the next middleware with an error message
			return next(err);
		} else {
			// Set the 'req.task' property
            //req.task = task;
            console.log(task);
			// Call the next middleware
			next();
		}
	});
};

