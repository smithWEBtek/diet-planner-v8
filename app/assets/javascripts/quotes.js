$(function(){
	quotesJSON();
	quotesHTML();
	quotesClear();
	listenForNewQuote();
	listenForNewCustomQuote();
});

function clearResponseArea(){
	$("#response_area").html("")
	$("#custom_quote_response_area").html("");
}

function quotesJSON(){
	$("#random_json_quotes").on("click", function(e) {
	$.ajax({
		type: 'get',
		url: '/random_quotes',
		dataType: 'json',
		success: function(response){
		clearResponseArea();
		for (var i = response.length - 1; i >= 0; i--) {
			$("#response_area").append(response[i] + "<br>");
			}
		}
	});
	e.stopImmediatePropagation();
	e.preventDefault();
	});
}

function quotesHTML(){
	$("#random_html_quotes").on("click", function(e) {
	$.ajax({
		type: 'get',
		url: '/random_quotes',
		dataType: 'html',
		success: function(response){
		clearResponseArea();
				$("#response_area").append(response);
			}
		});
	e.stopImmediatePropagation();
	e.preventDefault();
	});
};

function quotesClear(){
	$("#quotes_clear").on("click", function(e) {
		$.ajax({
			type: 'get',
			url: '/clear_quotes',
		}).success(function(){
		clearResponseArea();
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
			clearResponseArea();
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
			clearResponseArea();
			$("#response_area").html(response);
		});
	});
};

function listenForNewCustomQuote(){
	$("#new_custom_quote_button").on("click", function(e) {
 		e.stopImmediatePropagation();
		e.preventDefault();
		$.ajax({
			type: 'get',
			url: '/new_custom_quote',
			}).success(function(response){
			clearResponseArea();
			$("#custom_quote_response_area").html(response)
		newCustomQuote();
		 })
	});
}

function newCustomQuote(){
	$("#custom_quote_response_area form").on("submit", function(e){
	 	e.stopImmediatePropagation();
		e.preventDefault();	
		$.ajax({
			type: 'post',
			url: '/new_custom_quote',
			data: {
				authenticity_token:	$("input[name='authenticity_token']").val(),
				quote: {
					celeb_id: $("#quote_celeb_id").val(),
					verb_id: $("#quote_verb_id").val(),
					adj_id: $("#quote_adj_id").val(),
					food_id: $("#quote_food_id").val(),
					diet_id: $("#quote_diet_id").val(),
					phrase_id: $("#quote_phrase_id").val()
		  		}
		  	}
		  }).success(function(response){
		// 	clearResponseArea();
debugger;

	
		// 	var celebMeal = new CelebrityMeal(celeb, verb, adj, food, diet_id, phrase); 
		// alert(celebMeal.customQuote);
			$("#custom_quote_response_area").html(response);
		});
	});
};
