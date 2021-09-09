const { Comment } = require('../models');

const commentData = [
    {
        user_id: 4,
        post_id: 1,
        comment_content: "Dad!  You are the biggest nerd!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_content: "Mom!  You work too hard."
    },
    {
        user_id: 1,
        post_id: 3,
        comment_content: "What's a tick tock anywways?"
    },
    {
        user_id: 2,
        post_id: 4,
        comment_content: "Nine year olds are a lot smarter than they used to be."
    },
   
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;