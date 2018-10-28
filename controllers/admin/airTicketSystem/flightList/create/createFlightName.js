const express = require('express');
const router = express.Router();
const createFlightNameModel = require.main.require('./models/admin/airTicketSystem/flightList/create/createFlightNameModel');


router.get('*',function(req,res,next){
  if(req.session.name==null){
    res.redirect('/adminlogin');
  }else{
    next();
  }
});

router.post('/',function(req,res){
  var flightname = {
      name:req.body.flightname,
      shortname:req.body.shortname,
      cost:req.body.cost,
      costtype:req.body.costtype,
  };

  createFlightNameModel.create(flightname,function(result){
    if(result){
      res.redirect('/airticket');
    }else{
      res.redirect('/airticket');
    }
  });

});



module.exports = router;
