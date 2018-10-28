const db = require.main.require('./models/db/airTicket/db');



module.exports = {
    create:function(air,callback){
      var sql = "INSERT INTO `air`(`flightname`, `departure`, `arrival`, `duration`, `date`, `type`, `cost`, `costtype`) VALUES (?,?,?,?,?,?,?,?)";
      db.execute(sql,[air.flightname,air.departure,air.arrival,air.duration,air.date,air.type,air.cost,air.costtype],function(result){
        if(result){
          callback(true);
        }else{
          callback(false);
        }
      });
    },

};
