const express = require('express');
const router = express.Router();
const userModel = require.main.require('./models/user/login/userModel');
router.get('/',function(req,res){
    res.render('user/login/index');
});

router.post('/',function(req,res){
    var user = {
      name:req.body.username,
      password:req.body.password,
    };
    userModel.validate(user,function(result){
      if(result){
        req.session.username = user.name;
        req.session.userid = result[0].id;
        console.log(req.session.userid);
        res.redirect('/user');
      }else{
        res.redirect('/userlogin');
      }
    });
});

module.exports = router;
