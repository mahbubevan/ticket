const db = require.main.require('./models/db/airTicket/db');



module.exports = {
    getData:function(callback){
      var sql = "SELECT * FROM `air`";
      db.getResult(sql,[],function(result){
        if(result){
          console.log(result);
          callback(result);
        }else{
          callback(result);
        }
      });
    },

};
