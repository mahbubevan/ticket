const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
  if(req.session.name!=null){
    req.session.name = null;
    req.session.role = null;
    res.redirect('/adminlogin');
  }else{
    res.redirect('/adminlogin');
  }
});




module.exports = router;
