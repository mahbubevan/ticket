const db = require.main.require('./models/db/airTicket/db');



module.exports = {
    getData:function(callback){
      var sql = "SELECT * FROM `airportlist`";
      db.getResult(sql,[],function(result){
        if(result){
          callback(result);
        }else{
          callback(result);
        }
      });
    },

    getDataByName:function(name,callback){
      var sql = "SELECT * FROM `airportlist` WHERE name=?";
      db.getResult(sql,[name],function(result){
        if(result){
          callback(result);
        }else{
          callback(result);
        }
      });
    },
    edit:function(airportName,callback){
      var sql = "UPDATE `airportlist` SET `name`=?,`shortname`=?,`country`=? WHERE `id`=?";
      db.execute(sql,[airportName.name,airportName.shortname,airportName.country,airportName.id],function(result){
        if(result){
          callback(true);
        }else{
          callback(false);
        }
      });
    },

    delete:function(airportName,callback){
      var sql = "DELETE FROM `airportlist` WHERE `id`=?";
      db.execute(sql,[airportName.id],function(result){
        if(result){
          callback(true);
        }else{
          callback(false);
        }
      });
    },

};
