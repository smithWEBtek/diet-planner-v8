$(function(){
	quotes();
	quotesClear();
	listenForNewQuote();
});

function quotes(){
	$(".quote_button").on("click", function(e) {
	var url = e.target;
	$.ajax({
		type: 'get',
		url: url,
		dataType: 'json',
		success: function(response){
		$("#response_area").html("<h5>Random quotes: </h5><br>"+ "<li>" + response + "</li>");
		}
	});
	e.stopImmediatePropagation();
	e.preventDefault();
	});
}

function quotesClear(){
	$("#quotes_clear").on("click", function(e) {
		$.ajax({
			type: 'get',
			url: '/clear_quotes',
		}).success(function(){
			$("#response_area").html("");
		});	
	e.preventDefault();
	});
}

function listenForNewQuote(){
	$("#new_quote_button").on("click", function(e) {
 		e.stopImmediatePropagation();
		e.preventDefault();
		$.ajax({
			type: 'get',
			url: '/quotes/new',
			}).success(function(response){
			$("#response_area").html(response)
		newQuote();
		 })
	});
}

function newQuote(){
	$("#response_area form").on("submit", function(e){
	 	e.stopImmediatePropagation();
		e.preventDefault();	
		$.ajax({
			type: 'post',
			url: '/quotes',
			data: {
				authenticity_token:	$("input[name='authenticity_token']").val(),
				quote: {
					celeb: $("#quote_celeb").val(),
					verb: $("#quote_verb").val(),
					adj: $("#quote_adj").val(),
					food: $("#quote_food").val(),
					diet_id: $("#quote_diet_id").val(),
					phrase: $("#quote_phrase").val()
		  		}
		  	}
			}).success(function(response){
			$("#response_area").html(response);
		});
	});
};
