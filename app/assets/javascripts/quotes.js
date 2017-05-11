$(function(){
	quotesJSON();
	quotesHTML();
	quotesClear();
	listenForNewQuote();
	listenForNewDropdownQuote();
	newCelebMeal();
	clearResponseAreas();
});

function clearResponseAreas(){
	$("#response_area").html("")
	$("#dropdown_quote_response_area").html("");
	$("#celeb_meal_response_area").html("");
}

function quotesJSON(){
	$("#random_json_quotes").on("click", function(e) {
	$.ajax({
		type: 'get',
		url: '/random_quotes',
		dataType: 'json',
		success: function(response){
		clearResponseAreas();
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
		clearResponseAreas();
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
		clearResponseAreas();
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
			clearResponseAreas();
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
			clearResponseAreas();
			$("#response_area").html(response);
		});
	});
};

function listenForNewDropdownQuote(){
	$("#new_dropdown_quote_button").on("click", function(e) {
 		e.stopImmediatePropagation();
		e.preventDefault();
		$.ajax({
			type: 'get',
			url: '/new_dropdown_quote',
			}).success(function(response){
			clearResponseAreas();
			$("#dropdown_quote_response_area").html(response)
		newDropdownQuote();
		 })
	});
}

function newDropdownQuote(){
	$("#dropdown_quote_response_area form").on("submit", function(e){
	 	e.stopImmediatePropagation();
		e.preventDefault();	
		$.ajax({
			type: 'post',
			url: '/new_dropdown_quote',
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
			clearResponseAreas();
			$("#dropdown_quote_response_area").html(response);
		});
	});
};

function CelebrityMeal(celeb, verb, adj, food, diet, phrase){
	this.celeb = celeb;
	this.verb = verb;
	this.adj = adj;
	this.food = food;
	this.diet = diet;
	this.phrase = phrase;
}

CelebrityMeal.prototype.customQuote = function(){
	return ("Using the customQuote method, on the class CelebrityMeal..." + this.celeb + " " + this.verb + " " + this.adj + " " + this.food + " while on the " + this.diet + " diet, and said, \"" + this.phrase + "\"" + ".");	
}
 
function newCelebMeal(){
	$("#new_celeb_meal_button").on("click", function(e) {
 		e.stopImmediatePropagation();
		e.preventDefault();
		$.ajax({
			type: 'get',
			url: '/one_random_quote',
			dataType: 'json',
			}).success(function(response){
			clearResponseAreas();
				var celeb = response.celeb.name; 
				var verb = response.verb.name; 
				var adj = response.adj.name; 
				var food = response.food.name; 
				var diet = response.diet.name; 
				var phrase = response.phrase.content;
				var celebMeal = new CelebrityMeal(celeb, verb, adj, food, diet, phrase);
			$("#celeb_meal_response_area").html(celebMeal.customQuote());
		 })
	});
}
