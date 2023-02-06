const Comment = require('../models/comment.js');

class CommentRepo {
     create = async (data ) => {
        try {
             const comment = await Comment.create({
                 content : data.content,
                 userEmail : data.userEmail
             });
             return comment;
        } catch (error) {
            throw error;
        }
     }
}

module.exports = CommentRepo;