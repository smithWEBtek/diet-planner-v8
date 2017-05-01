$(function(){
	add_celeb();
	add_food();
	add_diet();
	add_phrase();
	indexesListeners();
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
  		$("#celeb_name").val('');
  		$("#celeb_list").append(response);
  		$(".show_celeb").show();
      attachListener();
  		 }
  	});
  	e.preventDefault();
  });
}

function attachListener(){
	$("button.show_celeb").on("click", function(e) {
  e.stopImmediatePropagation();
  showCeleb(e.target);
  });
};

function showCeleb(e){ 
  var celeb_id = e.dataset.id;
  var url = '/celebs/' + celeb_id;
  $.getJSON(url, function(celeb){
// debugger
  // var celebStr = celeb.stringify();
  $("#show_celeb").append(celeb.name);
});
}

function add_food(){
  $("#new_food").on("submit", function(e){
    url = this.action
    data = {
      'authenticity_token': $("input[name='authenticity_token']").val(),
      'food': {
      	'name': $("#food_name").val(),
      	'group_id': $("#food_group_id").val(),
      	'cals': $("#food_cals").val()
    	}
    }
    e.stopImmediatePropagation();
    $.ajax({
      type: 'POST',
      url: url,
      data: data,
      success: function(response){
      $("#food_name").val('')
      $("#food_cals").val('')
      $("#food_group_id").val('No group chosen')
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
  		'phrase': {'content': $("#phrase_content").val()}
  	}
  	e.stopImmediatePropagation();
  	$.ajax({
  		type: 'POST',
  		url: url,
  		data: data,
  		success: function(response){
  		$("#phrase_content").val('')
  		$("#phrase_list").append(response)
  		 }
  	});
  	e.preventDefault();
  });
}

function indexesListeners(){
	$(".indexes button").click(function(event){
		event.stopImmediatePropagation();
		var index = this.innerHTML.toLowerCase();
		$.ajax({
			type: "GET",
			url: "/" + index + ".json",
			success: function(response){
				var jsonStr = JSON.stringify(response);
				var div = "#index_" + index;
				$(div).text(jsonStr);
			}
		})
	});
}




