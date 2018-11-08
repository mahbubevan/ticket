$(document).ready(function(){
  $.ajax({
    url:'/getairportlist',
    method:'get',
    success:function(res){
      for(x in res){
        $('.airportList').append('<option value="'+res[x].name+'">'+res[x].name+'</option>');
      }
    },
  });


  $.ajax({
    url:'/getflightlist',
    method:'get',
    success:function(res){
      for(x in res){
        $('#flightname-list').append('<option value="'+res[x].name+'">'+res[x].name+'</option>');
      }
    },
  });

  $.ajax({
    url:'/getairroutelist',
    method:'get',
    success:function(res){
      for(x in res){
        $('#routeList').append('<tr><td>'+res[x].id+'</td><td>'+res[x].flightname+'</td><td>'+res[x].departure+'</td><td>'+res[x].arrival+'</td><td>'+res[x].duration+'</td><td>'+res[x].date+'</td><td>'+res[x].type+'</td><td>'+res[x].cost+'</td><td>'+res[x].costtype+'</td></td><td><a href="/getairroutelist/delete/'+res[x].id+'">Delete</a></td></tr>');
      }
    },
  });
});
