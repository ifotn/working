var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema( {
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    content: {
        type: String,
        default: '',
        trim: true
    }
});

module.exports = mongoose.model('Article', articleSchema);
