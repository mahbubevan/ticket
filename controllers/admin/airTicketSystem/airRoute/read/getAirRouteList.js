const express = require('express');
const router = express.Router();
const getAirRouteListModel = require.main.require('./models/admin/airTicketSystem/airRoute/read/getAirRouteListModel');


router.get('*',function(req,res,next){
  if(req.session.name==null){
    res.redirect('/adminlogin');
  }else{
    next();
  }
});

router.get('/',function(req,res){
  getAirRouteListModel.getData(function(result){
    if(result.length>0){
      res.send(result);
    }else{
      res.send('No data');
    }
  });
});

router.post('/searchByText',function(req,res){
  var text = {
    text:req.body.text,
  };
  getAirRouteListModel.getDataByText(text,function(result){
    if(result.length>0){
      res.send(result);
    }else{
      res.send('No data');
    }
  });
});


router.get('/edit/:id',function(req,res){
  var id = req.params.id;
  console.log(id);
  res.send(id);
});

router.get('/delete/:id',function(req,res){
  var id = req.params.id;
  getAirRouteListModel.delete(id,function(result){
    if(result){
      res.redirect('/airticket');
    }else{
      res.redirect('/airticket');
    }
  });
});


module.exports = router;
