$(function(){
  $.ajax({
    url:'/getbaseairroute/getair',
    method:'get',
    success:function(res){
      for(x in res){
        $('#getairlist').append('<tr><td>'+res[x].id+'</td><td>'+res[x].flightname+'</td><td>'+res[x].departure+'</td><td>'+res[x].arrival+'</td><td>'+res[x].duration+'</td><td>'+res[x].date+'</td><td>'+res[x].type+'</td><td>'+res[x].cost+'</td><td>'+res[x].costtype+'</td></td></tr>');
      }
    },
  });
});
