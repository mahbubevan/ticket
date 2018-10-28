const express = require('express');
const router = express.Router();
const createAirportNameModel = require.main.require('./models/admin/airTicketSystem/airportList/create/createAirportNameModel');


router.get('*',function(req,res,next){
  if(req.session.name==null){
    res.redirect('/adminlogin');
  }else{
    next();
  }
});

router.post('/',function(req,res){
  var airname = {
    name:req.body.airportname,
    shortname:req.body.shortname,
    country:req.body.countryname,
  };
  //console.log(user.name);
  createAirportNameModel.create(airname,function(result){
    if(result){
      res.redirect('/airticket');
    }else{
      res.redirect('/airticket');
    }
  });
  //res.redirect('/airticket');
});






module.exports = router;
