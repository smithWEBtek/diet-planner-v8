$(function(){
	// addListenersButtons();
});


function addListenersButtons(){
	$(".quote_generator_button").click(function(e){

	// debugger
	e.stopImmediatePropagation();
	e.preventDefault();
	console.log(e)
	})
}