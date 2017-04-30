$(function(){
	add_celeb();
	add_food();
	add_diet();
	add_phrase();
}); 

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

function add_food(){
  $("#new_food").on("submit", function(e){
    url = this.action
    data = {
      'authenticity_token': $("input[name='authenticity_token']").val(),
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
 
function add_diet(){
  $("#new_diet").on("submit", function(e){
		url = this.action
  	data = {
  		'authenticity_token':	$("input[name='authenticity_token']").val(),
  		'diet': {'name': $("#diet_name").val()}
  	}
  	e.stopImmediatePropagation();
  	$.ajax({
  		type: 'POST',
  		url: url,
  		data: data,
  		success: function(response){
  		$("#diet_name").val('')
  		$("#diet_list").append(response)
  		 }
  	});
  	e.preventDefault();
  });
}

function add_phrase(){
  $("#new_phrase").on("submit", function(e){
		url = this.action
  	data = {
  		'authenticity_token':	$("input[name='authenticity_token']").val(),
  		'phrase': {'name': $("#phrase_name").val()}
  	}
  	e.stopImmediatePropagation();
  	$.ajax({
  		type: 'POST',
  		url: url,
  		data: data,
  		success: function(response){
  		$("#phrase_name").val('')
  		$("#phrase_list").append(response)
  		 }
  	});
  	e.preventDefault();
  });
}
