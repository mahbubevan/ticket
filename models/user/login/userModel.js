const db = require.main.require('./models/db/airTicket/db');

module.exports = {
  validate:function(user,callback){
    var sql = "SELECT * FROM `user` WHERE name=? AND password=?";
    db.getResult(sql,[user.name,user.password],function(result){
      if(result){
        callback(result);
      }else{
        callback(result);
      }
    });
  },

};
