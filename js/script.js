/*****************************************************
 Treehouse Techdegree 
 FSJS Project 03 - Interactive Form
 Andy Tuinstra
******************************************************/


//Sets the focus on the name input field
$("#name").focus();

//initially hides "other-job" input element
$('#other-title').hide();
    //shows "other-job" input when 'other' option is selected (animations for smoother looking transitions/extra flare)
$('#title').change(function(){
    let jobRoles = $('#title').val();
    if (jobRoles == 'other'){
        $('#other-title').fadeIn(500); //input quickly fades in when other is selected.
    } else {
        $('#other-title').slideUp(500); //slides up and hides input if other deselected!
    };
});

//stuff shh