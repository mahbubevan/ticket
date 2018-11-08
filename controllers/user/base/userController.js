const express = require('express');
const router = express.Router();
const getAirRouteModel = require.main.require('./models/user/getAirRoute/getAirRouteModel');

router.get('*',function(req,res,next){
  if(req.session.username==null){
    res.redirect('/userlogin');
  }else{
    next();
  }
});

router.get('/',function(req,res){
  var user = {
    name:req.session.username,
  };
  res.render('user/base/index',user);
});

router.post('/getairroutelist',function(req,res){
  var data = {
    dep:req.body.dep,
    arr:req.body.arr,
  };

  getAirRouteModel.getData(data,function(result){
    if(result){
      res.send(result);
    }else{
      res.send(result);
    }
  });
  console.log(data);
});


router.get('/booking/:id',function(req,res){
  var id = req.params.id;
  req.session.airid = req.params.id;
  getAirRouteModel.getDataById(id,function(result){
    if(result){
      req.session.result = result;
      res.redirect('/userbooking');
    }else{
      res.send('/user');
    }
  });
});

module.exports = router;
