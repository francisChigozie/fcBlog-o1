var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: {
        type: String,
    },
     snippet: {
        type: String,
    },
    body: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Blog', blogSchema);