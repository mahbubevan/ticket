const express = require('express');
const router = express.Router();
const mailer = require('express-mailer');
const createUserModel = require.main.require('./models/user/signup/createUserModel');

router.get('/',function(req,res){
  res.render('user/signup/index');
});

router.post('/',function(req,res){
  var user = {
    name:req.body.name,
    password:req.body.password,
    email:req.body.email,
  };

  createUserModel.create(user,function(result){
    if(result){
      res.redirect('/userlogin');
    }else{
      res.redirect('/usersignup');
    }
  });
});
module.exports = router;
