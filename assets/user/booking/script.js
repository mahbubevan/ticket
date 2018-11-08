function calculate(){
  var x = document.getElementById('cost').value;
  var y = document.getElementById('nop').value;
  var total= x*y;
  document.getElementById('totalcost').value = total;
}

$(function(){
  $('#booking-button').click(function(e){
    if($('#paymenttype').val()==''){
      alert('Required Payment Type');
      e.preventDefault();
    }else if($('#nop').val()==''){
      alert('Required No Of Person');
      e.preventDefault();
    }else {

    }
  });

});
