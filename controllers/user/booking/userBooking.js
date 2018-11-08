const express = require('express');
const router = express.Router();
const invoiceid = require('uniqid');
const userBooking = require.main.require('./models/user/booking/userBooking');


router.get('*',function(req,res,next){
  if(req.session.username==null){
    res.redirect('/userlogin');
  }else{
    next();
  }
});

router.get('/',function(req,res){
  var result = req.session.result;
  var userid = {userid:req.session.userid};
  console.log(result);
  console.log(userid);
  console.log('Result');
  res.render('user/booking/index',result[0]);
  req.session.result = null;
});

router.post('/',function(req,res){
  var booking = {
            ticketid:req.body.ticketid,
            userid:req.session.userid,
            invoicekey:invoiceid(),
            paymenttype:req.body.paymenttype,
            status:'unpaid',
            nop:req.body.nop,
            total:req.body.totalcost,
  };

  userBooking.create(booking,function(result){
    if(result){
      res.redirect('/user');
    }else{
      res.redirect('/user');
    }
  });
  console.log(booking);
  console.log(invoiceid());
});

router.post('/getbooking',function(req,res){
  var user = {
    userid:req.session.userid,
  }
  userBooking.getData(user,function(result){
    if(result){
      res.send(result);
    }else{
      res.send(result);
    }
  });
});


// router.get('/getinvoice/:id',function(req,res){
//         var id = req.params.id;
//         var ticketid = '';
//         userBooking.getDataByInvoice(id,function(result){
//           if(result){
//             ticketid = result[0].ticketid;
//             console.log(ticketid);
//           }else{
//             ticketid = result[0].ticketid;
//           }
//         });
// });

module.exports = router;
