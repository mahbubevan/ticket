$(function(){
  $('select.airportList').change(function(){
    var selectedAirport = $(this).children('option:selected').val();
    //$('#edit-panel').click(function(){
      $.ajax({
        url:'/getairportlist/edit',
        method:'post',
        data:{
          name:selectedAirport
        },
        success:function(res){
          $('.edit-panel').html('<tr><td><input type="hidden" name="editid" value="'+res.id+'"/></td><td><input type="text" name="editname" value="'+res.name+'""/></td><td><input type="text" name="editshortname" value="'+res.shortname+'""/></td><td><input type="text" name="editcountry" value="'+res.country+'""/></td></tr>');
        }
      });
    //});
  });

  // if('#makedelete').click(function(e){
  //
  // });
  $('select.airportList').change(function(){
    var selectedAirport = $(this).children('option:selected').val();
    //$('#edit-panel').click(function(){
      $.ajax({
        url:'/getairportlist/edit',
        method:'post',
        data:{
          name:selectedAirport
        },
        success:function(res){
          $('.delete-panel').html('<tr><td><input type="hidden" name="editid" value="'+res.id+'"/></td><td><input type="text" name="editname" value="'+res.name+'"" disabled/></td><td><input type="text" disabled name="editshortname" value="'+res.shortname+'""/></td><td><input disabled type="text" name="editcountry" value="'+res.country+'""/></td></tr>');
        }
      });
    //});
  });

  $('#makedelete').click(function(e){
    var result = confirm("Are You Sure ?");

    if(result){

    }else{
      e.preventDefault();
    }
  });
});
