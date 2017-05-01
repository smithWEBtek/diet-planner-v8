$(function(){
	quotes();
	quotesClear();
});

function quotes(){
	$(".quote_button").on("click", function(e) {
	var url = e.target;
	$.ajax({
		type: 'get',
		url: url,
		success: function(response){
		$("#response_area").html(response);
		}
	});
	e.stopImmediatePropagation();
	e.preventDefault();
	});
}

function quotesClear(){
	
	$("#quotes_clear").on("click", function(e) {
// debugger;

	$("#response_area").html("");
	// e.stopImmediatePropagation();
	e.preventDefault();
	});
}