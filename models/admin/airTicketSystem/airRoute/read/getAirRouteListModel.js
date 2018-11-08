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

    getDataByText:function(text,callback){
      var sql = "SELECT * FROM `air` WHERE description LIKE '%"+text.text+"%' LIMIT 3";
      db.getResult(sql,[],function(result){
        if(result){
          console.log(result);
          callback(result);
        }else{
          callback(result);
        }
      });
    },

    delete:function(id,callback){
      var sql = "DELETE FROM `air` WHERE id=?";
      db.getResult(sql,[id],function(result){
        if(result){
          console.log(result);
          callback(true);
        }else{
          callback(false);
        }
      });
    },

};
