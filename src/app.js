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
        // const tweet = await tweetRepo.create({
        //     content :"hello with comment",
        //      userEmail : "a@ddcsxcvcqsqx.com"
        // });
        // console.log(tweet);
        // const comment = await commentRepo.create({
        //     content:"comment"
        // });
        // console.log(comment);
        // await tweet.comments.push(comment);
        // await tweet.save();
        // console.log(tweet);
        
 
    });
}

setUpandStartServer();