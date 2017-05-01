$(function(){
	addListenersButtons();
});


function addListenersButtons(){
	$(".quote_generator_button").click(function(e){
	alert("...ahh, you rang??")
	e.stopImmediatePropagation();
	e.preventDefault();
	})
}