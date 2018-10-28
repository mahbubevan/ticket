const express = require('express');
const router = express.Router();
const createAirRouteModel = require.main.require('./models/admin/airTicketSystem/airRoute/create/createAirRouteModel');



router.get('*',function(req,res,next){
  if(req.session.name==null){
    res.redirect('/adminlogin');
  }else{
    next();
  }
});

router.post('/',function(req,res){
  var air = {
    flightname:req.body.flight,
    departure:req.body.departure,
    arrival:req.body.arrival,
    duration:req.body.duration,
    date: req.body.airdate,
    type:req.body.type,
    cost:req.body.cost,
    costtype:req.body.costtype,
  };
  //console.log(user.name);
  createAirRouteModel.create(air,function(result){
    if(result){
      res.redirect('/airticket');
    }else{
      res.redirect('/airticket');
    }
  });
  //res.redirect('/airticket');
});

module.exports = router;
