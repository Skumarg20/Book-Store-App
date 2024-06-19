// Import required modules
const express = require('express');
const { getBook } = require('../controller/book.controller'); // Adjust the import based on your controller structure

// Create an instance of express router
const router = express.Router();

// Define route handling GET requests to '/'
router.get('/', getBook);

// Export the router to be used by your application
module.exports = router;
