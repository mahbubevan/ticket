const db = require.main.require('./models/db/airTicket/db');

module.exports = {

      validate:function(admin,callback){
        var sql = "SELECT * FROM admin WHERE name=? AND password=?";
        db.getResult(sql,[admin.name,admin.password],function(result){
          if(result){
            callback(result);
          }else{
            callback(result);
          }
        });
      },
};
