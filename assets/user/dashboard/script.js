$(function(){
  $('#searchflight').click(function(e){
    if($('#dep').val()==''){
      alert('Required Departure Field');
      e.preventDefault();
    }else if($('#arr').val()==''){
      alert('Required Arrival Field');
      e.preventDefault();
    }else{


    $.ajax({
      url:'/user/getairroutelist',
      method:'post',
      data:{
        dep:$('#dep').val(),
        arr:$('#arr').val(),
      },
      success:function(result){
        for(x in result){
          $('#sugg-air').append('<tr><td>'+result[x].id+'</td><td>'+result[x].flightname+'</td><td>'+result[x].departure+'</td><td>'+result[x].arrival+'</td><td>'+result[x].duration+'</td><td>'+result[x].date+'</td><td>'+result[x].type+'</td><td>'+result[x].cost+'</td><td>'+result[x].costtype+'</td><td><a href="/user/booking/'+result[x].id+'" class="btn btn-info">Book Now</a></td></tr>');
        }
      },
    });
  }
  });


  $.ajax({
    url:'/userbooking/getbooking',
    method:'post',
    success:function(result){
      for(x in result){
        $('#getBooking').append('<tr><td>'+result[x].id+'</td><td>'+result[x].flightname+'</td><td>'+result[x].departure+'</td><td>'+result[x].arrival+'</td><td>'+result[x].type+'</td></td><td>'+result[x].invoicekey+'</td></td><td>'+result[x].status+'</td></td><td>'+result[x].paymenttype+'</td></td><td>'+result[x].adultcount+'</td><td>'+result[x].total+'</td></tr>');
      }
    },
  });
});
