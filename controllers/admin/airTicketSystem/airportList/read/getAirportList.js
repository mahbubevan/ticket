const express = require('express');
const router = express.Router();
const getAirportListModel = require.main.require('./models/admin/airTicketSystem/airportList/read/getAirportListModel');


router.get('*',function(req,res,next){
  if(req.session.name==null){
    res.redirect('/adminlogin');
  }else{
    next();
  }
});

router.get('/',function(req,res){
  getAirportListModel.getData(function(result){
    if(result.length>0){
      res.send(result);
    }else{
      res.send('No data');
    }
  });
});


module.exports = router;
