$(document).ready(function(){

/*form validation  
@@jQuery-driven interactive elements 
@@if else
*/
$('button').click(function(submit){
  if($('#name').val().length ==0){
    $('.name-group .help-block').text("Name field can not be empty!");
//Change name
    $('.name-group').attr({
      class: 'form-group has-error'
    });
    submit.preventDefault();
  }else{
     $('#notice').modal();
     submit.preventDefault();
  }//end else
});//end click

/*add specific text when paticular radio button is checked
@@jQuery-driven interactive elements 
@@if else
*/
  $('#competition').change(function(){
    if($('input[name=competition]:checked').val()=="yes"){
      $('#competition .help-block').text("It's great!") 
    }else{
      $('#competition .help-block').text("We strongly suggest you join the competition!") 
    }
  });//end change

});//end Document ready



