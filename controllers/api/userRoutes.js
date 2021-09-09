const express = require('express');
const router = require('express').Router();
const { User, Post, Comment} = require('../../models');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();
        const userDataJson = userData.map((user) =>
            user.get({plain:true})
        );
        res.json(userDataJson)
    } catch (err)
    {
        console.log(err)
        res.json(err);
    }
});

router.get('/id:', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id,
        {
            attributes: {exclude: ["password"]},
        });

        if (!userdata) {
            res.json({msg: "No user found with this id."});
            return;
        }
            res.json(userData)
    }
    catch(err){
        console.log(err);
        res.json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        console.log(userData)
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json(userData);
        });
    } catch (err) {
        res.json(err);
    }
});

router.post('/login', async(req, res) => {
    try {
        const userData = await User.findOne({where:{email:req.body.email}});
    if (!userData) {
        res.json({msg:"Password or email are incorrect.  Try again."});
        return;
    
    }
        const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
        res.json({msg:"Password or email are incorrect.  Try again."});
        return;
    }

    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.json({user:userData, msg:"You have successfully logged in."});
    });
}
    catch(err) {
        res.json(err);
    }

});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
        res.end();
        });
}   else {
    res.end();
}
});

module.exports = router;