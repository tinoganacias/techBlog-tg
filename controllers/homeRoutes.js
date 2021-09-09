const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
    try{
        const postsData = await Post.findAll(
          {
            attributes: [
                'id',
                'title',
                'post_content',
                'date_created',
                'post_content',
            ],
            include: [{
                model: Comment,
                attributes: ['id', 'comment_content', 'post_id'
                ]},
                {
                model: User,
                attributes: ['username']
            }]
        }
        );

    const postsDataJson = postsData.map((post) => post.get({ plain: true }));
    res.render('homepage',{
        postsDataJson,
        logged_in: req.session.logged_in,
        style: 'home.css'
    });
    } catch (err) {
        rest.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => { 
    try {
      const postData = await Post.findByPk(req.params.id, {
        attributes: [
          'id',
          'title',
          'post_content',
          'date_created',
          'post_content',
      ],
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
  
      const post = postData.get({ plain: true });
  
      res.render('post', {
        ...post, 
        logged_in: req.session.logged_in,
        style: 'post.css'
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
    
  });
  
  router.get("/logout", (req,res)=>{
    req.session.destroy();
    res.send("logged out");
})

  module.exports = router;