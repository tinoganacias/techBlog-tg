const router = require('express').Router();
const { Comment } = require('../../models');

// Get all comments
router.get('/', async (_req,res) => {
    try{
        const commentsData = await Comment.findAll();
        const commentsDataJson = commentsData.map((comment) => 
            comment.get({ plain: true })
        );
        res.status(200).json(commentsDataJson)
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

// Get post by ID
router.get('/:id', async (req,res) => {
    try{
        const commentsData = await Comment.findByPk(req.params.id);

            if (!commentsData) {
                res.status(404).json({ message: 'No comment found with that id!' });
                return;
              }

            res.status(200).json(commentsData)
    } catch (err){
        console.log(err);
        res.status(500),json(err);
    }
})


module.exports = router;

