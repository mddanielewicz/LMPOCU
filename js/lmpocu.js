//Nav Slider
//*********FIX CSS****************
// $('navLink').click(function(){
// 	if ( $('.nav ul').is(':hidden') ){
// 		$('.nav ul').slideDown('slow');
// 	}else {
// 		$('.nav ul').slideUp('slow');
// 	}
// });

//Product Sliders
//Checking SLider

$('.checkLink').click(function(){
	if ( $('.checkSlide').is(':hidden') ) {
		$('.savSlide').slideUp('slow');
		$('.loanSlide').slideUp('slow');
		$('.investSlide').slideUp('slow');
		$('.checkSlide').slideDown('slow');
	}else{
		$('.checkSlide').slideUp('slow');
	}
});

//Saving Slider
$('.savLink').click(function(){
	if ( $('.savSlide').is(':hidden') ) {
		$('.checkSlide').slideUp('slow');
		$('.loanSlide').slideUp('slow');
		$('.investSlide').slideUp('slow');
		$('.savSlide').slideDown('slow');
	}else{
		$('.savSlide').slideUp('slow');
	}
});

//Loan Slider
$('.loanLink').click(function(){
	if ( $('.loanSlide').is(':hidden') ) {
		$('.savSlide').slideUp('slow');
		$('.checkSlide').slideUp('slow');
		$('.investSlide').slideUp('slow');
		$('.loanSlide').slideDown('slow');
	}else{
		$('.loanSlide').slideUp('slow');
	}
});

//Investing Slider
$('.investLink').click(function(){
	if ( $('.investSlide').is(':hidden') ) {
		$('.savSlide').slideUp('slow');
		$('.checkSlide').slideUp('slow');
		$('.loanSlide').slideUp('slow');
		$('.investSlide').slideDown('slow');
	}else{
		$('.investSlide').slideUp('slow');
	}
});

//Location Slider
//Main Branch
$('.mainLink').click(function(){
	if ( $('.mainSlide').is(':hidden') ) {
		$('.outLoopSlide').slideUp('slow');
		$('.burghardSlide').slideUp('slow');
		$('.mainSlide').slideDown('slow');
	}else{
		$('.mainSLide').slideUp('slow');
	}
});

//Outer Loop Branch
$('.outLoopLink').click(function(){
	if ( $('.outLoopSlide').is(':hidden') ) {
		$('.mainSlide').slideUp('slow');
		$('.burghardSlide').slideUp('slow');
		$('.outLoopSlide').slideDown('slow');
	}else{
		$('.outLoopSlide').slideUp('slow');
	}
});

//Burghard Branch
$('.burghardLink').click(function(){
	if ( $('.burghardSlide').is(':hidden') ) {
		$('.mainSlide').slideUp('slow');
		$('.outLoopSlide').slideUp('slow');
		$('.burghardSlide').slideDown('slow');
	}else{
		$('.burghardSlide').slideUp('slow');
	}
});

//Calculator
var $deposit = " ";
var $rate = " ";
var $time = " ";
var $balance = " ";


$('#deposit').change(function($deposit){
	$deposit = $('#deposit').val();
	console.log($deposit);
	return $deposit;
});

console.log($deposit);

//Direction Slider

$('.showDirection').click(function(){
	if ( $('.direction').is(':hidden') ){
		$('.direction').slideDown('slow');
		$('.direction').css({"display": "block"});
		$('.showDirection').replaceWith('<p class="showDirection">Hide Directions</p>');

	}else{
		$('.direction').slideUp('slow');
		//$('.showDirection').replaceWith('<p>Show Directions</p>')
	}
});