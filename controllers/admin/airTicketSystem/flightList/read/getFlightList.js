const express = require('express');
const router = express.Router();
const getFlightListModel = require.main.require('./models/admin/airTicketSystem/flightList/read/getFlightListModel');


router.get('*',function(req,res,next){
  if(req.session.name==null){
    res.redirect('/adminlogin');
  }else{
    next();
  }
});

router.get('/',function(req,res){
  getFlightListModel.getData(function(result){
    if(result.length>0){
      res.send(result);
    }else{
      res.send('No data');
    }
  });
});


module.exports = router;
