const express = require('express');
const router = express.Router();
const getAirRouteListModel = require.main.require('./models/admin/airTicketSystem/airRoute/read/getAirRouteListModel');

router.get('/',function(req,res){
    res.render('base/getAirRouteList');
  });

  router.get('/getair',function(req,res){
    getAirRouteListModel.getData(function(result){
      if(result.length>0){
        console.log(result);
        res.send(result);
      }else{
        res.send('No data');
      }
    });
  });

  router.get('/booking/:id',function(req,res){
    var id = req.params.id;
    getAirRouteListModel.getData(function(result){
      if(result.length>0){
        console.log(result);
        res.send(result);
      }else{
        res.send('No data');
      }
    });
  });

module.exports = router;
