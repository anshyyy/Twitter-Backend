const Tweet = require('../models/tweet');
class TweetRepository {
    create = async (data) => {
        try {
            const tweet = await Tweet.create({
                content: data.content,
                userEmail: data.userEmail
            })
            return tweet;
        } catch (error) {
            throw error;
        }
    }

    deleteTweet = async (id) => {
        try {
            await Tweet.findByIdAndRemove(id)
            return 'deleted the tweet';
        } catch (error) {
            throw error;
        }
    }

    update = async(id,data)=> {
        try {
             const tweet = await Tweet.findByIdAndUpdate(id,data,{new:true});
             return tweet;
        } catch (error) {
            throw error;
        }
    }
    get = async(id)=> {
        try {
             const tweet = await Tweet.findById(id);
             return tweet;
        } catch (error) {
            throw error;
        }
    }

    getWithComments= async(id) => {
        try {
            const tweet = await Tweet.findById(id).populate({path:'comments'}).lean();
            return tweet;
        } catch (error) {
            throw error;
        }
    }
    getAll = async(limit, offset)=>{
        try {

            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
            
        } catch (error) {
            throw error;
        }
    }

}

module.exports = TweetRepository;