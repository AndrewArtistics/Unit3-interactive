/*****************************************************
 Treehouse Techdegree 
 FSJS Project 03 - Interactive Form
 Andy Tuinstra
******************************************************/

/******************************
 Global variables/selectors
******************************/

//Sets the focus on the name input field
$("#name").focus();

$('#other-title').hide(); //initially hides "other-job" input element

$('#credit-card').hide(); //hides credit card inputs on load
//finds and appends ID's to the paypal and bitcoin divs and then hides them on load
$("#credit-card").next().attr('id', 'paypal');
$("#credit-card").next().next().attr('id', 'bitcoin');
$('#paypal').hide(); 
$('#bitcoin').hide();


/*****************************************
Job title selections
******************************************/

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
// $('#color').hide();



/***************
Payment methods
 ***************/
$('#payment').change(function(){
    let payMethod = $('#payment').val();

    if (payMethod == 'select_method') {
        $('#credit-card').hide();
        $('#paypal').hide();
        $('#bitcoin').hide();
    };
    if (payMethod == 'credit card') {
        $('#credit-card').fadeIn(500);
        $('#paypal').hide();
        $('#bitcoin').hide();
    };
    if (payMethod == 'paypal') {
        $('#credit-card').hide();
        $('#paypal').fadeIn(500);
        $('#bitcoin').hide();
    };
    if (payMethod == 'bitcoin') {
        $('#credit-card').hide();
        $('#paypal').hide();
        $('#bitcoin').fadeIn(500);
    };
});