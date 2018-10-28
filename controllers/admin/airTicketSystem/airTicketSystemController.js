const express = require('express');
const router = express.Router();


router.get('*',function(req,res,next){
  if(req.session.name==null){
    res.redirect('/adminlogin');
  }else{
    next();
  }
});

router.get('/',function(req,res){
  var admin = {
    name:req.session.name,
    role:req.session.role,
  };
  res.render('admin/airTicketSystem/index',admin);
});






module.exports = router;
