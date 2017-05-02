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
	$(".response_area form.new_quote").on("click", function(e) {
		new_quote();
	});
}

function new_quote(){
  // $("form").on("submit", function(e){
	$(".response_area form.new_quote").submit();
  	debugger; 
 
// 		url = '/quotes/'
//   	data = {
//   		'authenticity_token':	$("input[name='authenticity_token']").val(),
//   		'quote': {
//   			'celeb_id': $("#quote_celeb").val(),
// 	  		'verb_id': $("#quote_verb").val(),
// 	  		'adj_id': $("#quote_adj").val(),
// 	  		'food_id': $("#quote_food").val(),
// 	  		'diet_id': $("#quote_diet").val(),
// 	  		'phrase_id': $("#quote_phrase").val()
// 	  	}
//   	}
//   	e.stopImmediatePropagation();
//   	$.ajax({
//   		type: 'POST',
//   		url: url,
//   		data: data,
//   		success: function(response){

//   			// show the new quote, on home page, without redirect, (via ajax)
//   		// $("#celeb_name").val('');
//   		// $("#celeb_list").append(response);
//   		// $(".show_celeb").show();
//     //   attachListenerCeleb();
//   		 }
//   	});
 	e.stopImmediatePropagation();
	e.preventDefault();
}