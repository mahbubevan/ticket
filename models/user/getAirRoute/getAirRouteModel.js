const db = require.main.require('./models/db/airTicket/db');


module.exports = {
  getData:function(data,callback){
    var sql = "SELECT * FROM `air` WHERE description LIKE '%"+data.dep+"%' or description LIKE '%"+data.arr+"%' LIMIT 3";
    db.getResult(sql,[],function(result){
      if(result){
        console.log(result);
        callback(result);
      }else{
        callback(result);
      }
    });
  },

  getDataById:function(id,callback){
    var sql = "SELECT * FROM `air` WHERE id=?";
    db.getResult(sql,[id],function(result){
      if(result){
        callback(result);
      }else{
        callback(result);
      }
    });
  },

};
