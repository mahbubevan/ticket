const db = require.main.require('./models/db/airTicket/db');


module.exports = {

    create:function(booking,callback){
      var sql = "INSERT INTO `booking`(`ticketid`, `userid`, `invoicekey`, `paymenttype`, `status`, `adultcount`, `total`) VALUES (?,?,?,?,?,?,?)";
      db.execute(sql,[booking.ticketid,booking.userid,booking.invoicekey,booking.paymenttype,booking.status,booking.nop,booking.total],function(result){
        if(result){
          callback(true);
        }else{
          callback(false);
        }
      });
    },

    getData:function(user,callback){
      var sql = "SELECT air.flightname,air.departure,air.arrival,air.type,booking.id,booking.invoicekey,booking.status, booking.paymenttype,booking.adultcount,booking.total FROM air INNER JOIN booking ON air.id=booking.ticketid AND userid=? ORDER BY booking.id DESC";
      db.getResult(sql,[user.userid],function(result){
        if(result){
          callback(result);
        }else{
          callback(result);
        }
      });
    },

    // getDataByInvoice:function(id,callback){
    //   var sql = "SELECT * FROM booking WHERE invoicekey=?";
    //   db.getResult(sql,[id],function(result){
    //     if(result){
    //       callback(result);
    //     }else{
    //       callback(result);
    //     }
    //   });
    // },

};
