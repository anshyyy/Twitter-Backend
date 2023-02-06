const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
    },
    userEmail: {
        type: String,
        unique: true
    },
    comments: [
        {
          type:mongoose.Schema.Types.ObjectId,
          ref:'Comment'
        }
    ]
}, { timestamps: true });

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;