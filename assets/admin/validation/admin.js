$(function(){
  $('#addairport').click(function(e){
    if($('#airportname').val()==''){
      alert('Required Airport Name');
      e.preventDefault();
    }else if($('#iata').val()==''){
      alert('Required IATA CODE');
      e.preventDefault();
    }else if($('#region').val()==''){
      alert('Required Region');
      e.preventDefault();
    }
  });

  $('#addflight').click(function(e){
    if($('#fname').val()==''){
      alert('Required Flight Name');
      e.preventDefault();
    }else if($('#fshort').val()==''){
      alert('Required Short Name');
      e.preventDefault();
    }else if($('#fcost').val()==''){
      alert('Required Cost');
      e.preventDefault();
    }else if($('#fcosttype').val()==''){
      alert('Required Cost Type');
      e.preventDefault();
    }else{

    }
  });

  $('#addroute').click(function(e){
    if($('#flightname-list').val()==''){
      alert('Required Flight Name');
      e.preventDefault();
    }else if($('#airdate').val()==''){
      alert('Required Air Date');
      e.preventDefault();
    }else if($('#duration').val()==''){
      alert('Duration Required');
      e.preventDefault();
    }else if($('#type').val()==''){
      alert('Type Required');
      e.preventDefault();
    }else if($('#cost').val()==''){
      alert('Cost Required');
      e.preventDefault();
    }else if($('#costtype').val()==''){
      alert('Cost Type Required');
      e.preventDefault();
    }else{

    }
  });
});
