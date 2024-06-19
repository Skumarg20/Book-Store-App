// Import required modules
const express = require('express');
const { signup,login } = require('../controller/user.controller'); // Adjust the import based on your controller structure

// Create an instance of express router
const router = express.Router();

// Define route handling GET requests to '/'
router.post('/signup', signup);
router.post('/login', login);


// Export the router to be used by your application
module.exports = router;
