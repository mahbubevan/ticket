$(function(){
  $('#searchtext').keyup(function(){
    $.ajax({
      url:'/getairroutelist/searchByText',
      method:'post',
      data:{
        text:$('#searchtext').val(),
      },
      success:function(result){
        console.log(result.departure);
        for(x in result){
          $('#suggestion').html('<div style="height:50px;color:#ffc017">'+result[x].description  +' <a href="/getbaseairroute">Buy Ticket</a></div><br>');
      }
      },
    });
  });

  $('#mainsearch').click(function(){
    if($('#searchtext').val()==''){
      alert('Input Required');
    }else{
          document.location.href = '/getbaseairroute';
    }
  });
});
