const db = require.main.require('./models/db/airTicket/db');



module.exports = {
    getData:function(callback){
      var sql = "SELECT * FROM `flightname`";
      db.getResult(sql,[],function(result){
        if(result){
          callback(result);
        }else{
          callback(result);
        }
      });
    },

};
