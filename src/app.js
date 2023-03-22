const express = require('express');
const app = express();
const connect = require('./config/database');
const Tweet = require('./models/tweet');
const {PORT} = require('./config/index');
const TweetRepository  = require('./repository/tweetRepo');
const CommentRepository = require('./repository/commentRepo');
const tweetRepo = new TweetRepository();
const commentRepo = new CommentRepository();



const setUpandStartServer = async ()=> {
    app.listen(PORT,async ()=>{
        console.log(`Server Started at ${PORT}`);

        await connect();
 
    });
}

setUpandStartServer();