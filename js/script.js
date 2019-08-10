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

//hides the 'select theme' after a theme is choses and hides the color options until a theme is chosen.
$('#design').children('option:eq(0)').hide();
$('#color').prepend('<option disabled selected value="">Please select a T-shirt theme.</option>');
$('#color').children().hide();

//appends an html string to the end of the activities fieldset
$('.activities').append('<span id="spanTotal"><b><u>Total:</u></b> $0 </span>');

 //removes 'select payment method' option.
$('#payment').children('option:eq(0)').remove();
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

/***************
T-shirt and Color selection
***************/

//shows appropriate color selection for each theme once one is selected.
$('#design').change(function(){
    let design = $('#design').val();

    if (design == 'js puns'){
        $('#color').children().hide();
        $('#color').children('option:eq(1)').show();
        $('#color').children('option:eq(1)').next().show();
        $('#color').children('option:eq(1)').next().next().show();
        $('#color').val('cornflowerblue');
    };
    if (design == 'heart js'){
        $('#color').children().hide();
        $('#color').children('option:eq(4)').show();
        $('#color').children('option:eq(4)').next().show();
        $('#color').children('option:eq(4)').next().next().show();
        $('#color').val('tomato');
    };
});

/*************************
Activities registration
*************************/

/******
validates when a checkbox is checked.
Adds price to a total cost, removes price when unchecked.
disables activities checkboxes with conflicting time slots.
****8*/
$('.activities').change('click', function() {
    var checked = 0;
    if ($('input[name="all"]').is(':checked')) {
        checked += 200;
    };
    if ($('input[name="js-frameworks"]').is(':checked')){
        checked += 100;
        $("input[name='express']").attr("disabled", true)
    } else {
        $("input[name='express']").attr("disabled", false)
    };

    if ($('input[name="js-libs"]').is(':checked')){
        checked += 100;
        $("input[name='node']").attr("disabled", true)
    } else {
        $("input[name='node']").attr("disabled", false)
    };

    if ($('input[name="express"]').is(':checked')){
        checked += 100;
        $("input[name='js-frameworks']").attr("disabled", true)
    } else {
        $("input[name='js-frameworks']").attr("disabled", false)
    };

    if ($('input[name="node"]').is(':checked')){
        checked += 100;
        $("input[name='js-libs']").attr("disabled", true)
    } else {
        $("input[name='js-libs']").attr("disabled", false)
    };
    
    if ($('input[name="build-tools"]').is(':checked')){
        checked += 100;
    };
    
    if ($('input[name="npm"]').is(':checked')){
        checked += 100;
    };
    totalCost(checked);
});

function totalCost(checked) {
    if (checked !== 0 ) {
        $('#spanTotal').replaceWith('<span id="spanTotal"><b><u>Total:</u></b> $' + checked + '</span>');
    } else {
        $('#spanTotal').replaceWith('<span id="spanTotal"><b><u>Total:</u></b> $0 </span>')
    }
};



/***************
Payment methods
***************/
$('#payment').change(function(){
    let payMethod = $('#payment').val();

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

/*************************
Regex form validations
Displays proper error messages for blank/incomplete forms
regex to check for valid input/formats for name, email and credit information
*************************/

