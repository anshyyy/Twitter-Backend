const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, "Tweet size can't be greater than 250"]
    },
    hashtags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hashtag'
    }]
}, { timestamps: true });



// //virtual function they exist, but they are not in document, it is processed at runtime (same like .id)
// tweetSchema.virtual('contentWithEmail').get(function process(){
//          return `${this.content} \n created by : ${this.userEmail}`;
// });

// //trigger -> middleware (pre,post)

// tweetSchema.pre('save',function(next){
//      console.log('inside a hook');
//      // it can be used for validation and many other things
//     // this.content = this.content + "anshu"
//      next();
// });



const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;