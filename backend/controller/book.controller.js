const Book = require('../model/book.model.js'); // Adjust the path based on your model structure

const getBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getBook };
