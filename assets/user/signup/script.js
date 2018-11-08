$(function(){
  $('#sub').click(function(e){
    if($('#name').val()==''){
      alert('Required Name');
      e.preventDefault();
    }else if($('#password').val()==''){
      alert('Required Password');
      e.preventDefault();
    }else if($('#password').val()!==$('#cpassword').val()){
      alert('Password and Confirm Password SHould mathc');
      e.preventDefault();
      }else if($('#email').val()==''){
      alert('Required Email');
      e.preventDefault();
    }else{

    }
  });
});
