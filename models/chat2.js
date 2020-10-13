const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    id: Number,
    author: String,
    message: String
});

module.exports = mongoose.model('Chat', chatSchema)       // Chats--> nama table