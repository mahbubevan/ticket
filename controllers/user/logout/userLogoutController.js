const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
  req.session.username = null;
  req.session.userid = null;
  res.redirect('/');
});
module.exports = router;
