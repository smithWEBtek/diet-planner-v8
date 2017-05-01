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
		$("#response_area").html(response);
		}
	})
	e.stopImmediatePropagation();
	e.preventDefault();
	console.log(e)
	})
}