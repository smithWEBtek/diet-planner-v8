$(function(){
	addListenersButtons();
});


function addListenersButtons(){
	$(".quote_button").on("click", function(e) {
	var url = e.target;
	$.ajax({
		type: 'get',
		url: url,
		success: function(response){
	// debugger;
		$("#new_quote_form").html(response);
		}
	})
	e.stopImmediatePropagation();
	e.preventDefault();
	console.log(e)
	})
}