const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connect = async () => {
       await mongoose.connect('mongodb://localhost/twitter_Dev');
}

module.exports = connect;