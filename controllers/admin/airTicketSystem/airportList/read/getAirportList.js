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


router.post('/edit',function(req,res){
  var name = req.body.name;
  getAirportListModel.getDataByName(name,function(result){
    if(result.length>0){
      res.send(result[0]);
    }else{
      res.send("No data");
    }
  });
});

router.post('/makeedit',function(req,res){
  var airportName = {
    id:req.body.editid,
    name:req.body.editname,
    shortname:req.body.editshortname,
    country:req.body.editcountry,
  };
  console.log(airportName.id);
  getAirportListModel.edit(airportName,function(result){
    if(result){
      res.redirect('/airticket');
    }else{
      res.redirect('/airticket');
    }
  });

});

router.post('/makedelete',function(req,res){
  var airportName = {
    id:req.body.editid,
    name:req.body.editname,
    shortname:req.body.editshortname,
    country:req.body.editcountry,
  };
  console.log(airportName.id);
  getAirportListModel.delete(airportName,function(result){
    if(result){
      res.redirect('/airticket');
    }else{
      res.redirect('/airticket');
    }
  });

});

module.exports = router;
