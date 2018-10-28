const express = require('express');
const router = express.Router();
const adminLoginModel = require.main.require('./models/admin/login/adminLoginModel');

router.get('/',function(req,res){
  res.render('admin/login/index');
});

router.post('/',function(req,res){
  var admin = {
          name:req.body.name,
          password:req.body.password,
  };
  adminLoginModel.validate(admin,function(result){
    if(result.length>0){
      req.session.name = result[0].name;
      req.session.role = result[0].role;
      res.redirect('/airticket');
    }else{
      res.redirect('/adminlogin');
    }
  });
});



module.exports = router;
