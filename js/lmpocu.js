//nav slider
$('.navButton').click(function(e){
  $(this).toggleClass('navButton--active');
  //grabs the next element and showes it or hides it.
	$(this).next().slideToggle('400ms');
	});

//nav sumMenu slider
$('.navSubLink').click(function(e){
  $(this).toggleClass('navSubLink--active');
  //grabs the next element and showes it or hides it.
	$(this).next().slideToggle('400ms');
	});

//News and announcement scroller

//Container for messages
//Dots for number of messages
	//selected dot is displayed
//Timer to scroll through messages



//product slider
$('.productLink').click(function(e){
  $(this).toggleClass('productLink--active');
  //grabs the next element and showes it or hides it.
	$(this).next().slideToggle('400ms');
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
		$('.showDirection').html('<p class="showDirection">Hide Directions</p>');

	}else{
		$('.direction').slideUp('slow');
		$('.showDirection').html('<p class="showDirection">Show Directions</p>');
	}
});
