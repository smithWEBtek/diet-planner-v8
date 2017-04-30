$(function(){
	add_celeb();
	add_food();
}); 

function add_food(){
  $("#new_food").on("submit", function(e){
		url = this.action
  	data = {
  		'authenticity_token':	$("input[name='authenticity_token']").val(),
  		'food': {'name': $("#food_name").val()}
  	}
  	e.stopImmediatePropagation();
  	$.ajax({
  		type: 'POST',
  		url: url,
  		data: data,
  		success: function(response){
  		$("#food_name").val('')
  		$("#food_list").append(response)

  		 }
  	});
  	e.preventDefault();
  });
}

function add_celeb(){
  $("#new_celeb").on("submit", function(e){
		url = this.action
  	data = {
  		'authenticity_token':	$("input[name='authenticity_token']").val(),
  		'celeb': {'name': $("#celeb_name").val()}
  	}
  	e.stopImmediatePropagation();
  	$.ajax({
  		type: 'POST',
  		url: url,
  		data: data,
  		success: function(response){
  		$("#celeb_name").val('')
  		$("#celeb_list").append(response)

  		 }
  	});
  	e.preventDefault();
  });
}