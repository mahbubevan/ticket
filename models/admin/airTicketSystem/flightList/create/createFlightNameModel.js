const db = require.main.require('./models/db/airTicket/db');



module.exports = {
    create:function(flightname,callback){
      var sql = "INSERT INTO `flightname`(`name`, `cost`, `costtype`, `shortname`) VALUES (?,?,?,?)";
      db.execute(sql,[flightname.name,flightname.cost,flightname.costtype,flightname.shortname],function(result){
        if(result){
          callback(true);
        }else{
          callback(false);
        }
      });
    },

};
