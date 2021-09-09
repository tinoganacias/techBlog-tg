const router = require('express').Router();
const {Post, User, Comment} = require('../models');

router.get('/', async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Post }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('dashboard', {
        ...user,
        logged_in: true,
        style: 'dashboard.css',
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;