$(function(){
  $('#submit').click(function(e){
    if($('#name').val()==''){
      alert('Name Required');
      e.preventDefault();
    }else if ($('#password').val()==''){
      alert('Password Required');
      e.preventDefault();
    }else{

    }
  });
});
