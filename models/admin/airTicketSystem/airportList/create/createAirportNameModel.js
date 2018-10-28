const db = require.main.require('./models/db/airTicket/db');



module.exports = {
    create:function(airname,callback){
      var sql = "INSERT INTO `airportlist`(`name`,`shortname`, `country`) VALUES (?,?,?)";
      db.execute(sql,[airname.name,airname.shortname,airname.country],function(result){
        if(result){
          callback(true);
        }else{
          callback(false);
        }
      });
    },

};
