const { Post } = require('../models');

const postData = [
    {
        title: "mySQL is Incredibly Exciting!",
        post_content: "I love nothing more than to spend an evening with a Coors Light and mySQL",
        user_id: 1
    },
    {
        title: "We Need a Winery Finder App!",
        post_content: "I manage a winery in Walla Walla and everything is word of mouth.  We NEED a winery finder application.",
        user_id: 4
    },
    {
        title: "Tik Tok and I Don't Stop",
        post_content: "My mother won't do any Tik Tok dances with me.  We need an application she's not scared of.",
        user_id: 3
    },
    {
        title: "Science Hub",
        post_content: "I'm nine years old and I want to create an application that hosts science podcasts, science YouTube videos, and gives kids like me a place to chat with other science enthusiasts.  Also my dad is so cool.",
        user_id: 2
    },
   
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts