const mysql = require('mysql');

var connection = "";

function connectMercury(){
  connection = mysql.createConnection({

              host:"192.168.64.2",
              user:"evan",
              password:"evan",
              database:"ticket",
  });

  connection.connect(function(err){
    if(err){
      console.log(err.stack);
    }else{
      console.log("Successfully Connected");
    }
  });
}

//connectMercury();

module.exports = {

      getResult: function(sql,params,callback){
          connectMercury();
          if(params==null){
            connection.query(sql,function(error,result){
              if(error){
                console.log(error.stack);
                callback([]);
              }else{
                console.log(result);
                callback(result);
              }
            });
            connection.end(()=>console.log("Connection Closed"));
          }else{
            connection.query(sql,params,function(error,result){
              if(error){
                console.log(error.stack);
                callback([]);
              }else{
                console.log(result);
                callback(result);
              }
            });
            connection.end(()=>console.log("Connection Closed"));
          }
      },

      execute: function(sql,params,callback){
        connectMercury();
        if(params==null){
          connection.query(sql,function(error,result){
            if(error){
              console.log(error.stack);
              callback(false);
            }else{
              callback(true);
            }
          });
          connection.end(()=>console.log("Connection Closed.."));
        }else{
          connection.query(sql,params,function(error,result){
            if(error){
              console.log(error.stack);
              callback(false);
            }else{
              callback(true);
            }
          });
          connection.end(()=>console.log("Connection Closed"));
        }
      },
};
