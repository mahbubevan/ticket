const db = require.main.require('./models/db/airTicket/db');


module.exports = {

        create:function(user,callback){
          var sql = "INSERT INTO `user`(`name`, `password`, `email`) VALUES (?,?,?)";
          db.execute(sql,[user.name,user.password,user.email],function(result){
            if(result){
              callback(true);
            }else{
              callback(false);
            }
          });
        },
};
