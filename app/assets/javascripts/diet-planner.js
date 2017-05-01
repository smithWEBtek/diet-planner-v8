$(function(){
	add_celeb();
	add_food();
	add_diet();
	add_phrase();
	indexesListeners();
	attachListenersGroups();
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
      attachListenerCeleb();
  		 }
  	});
  	e.preventDefault();
  });
}

function attachListenerCeleb(){
	$("button.show_celeb").on("click", function(e) {
  e.stopImmediatePropagation();
  showCeleb(e.target);
  });
};

function showCeleb(e){ 
  var celeb_id = e.dataset.id;
  var url = '/celebs/' + celeb_id;
  $.getJSON(url, function(celeb){
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

function attachListenersGroups() {	
	$(".groups p").on("click", function(e) {
 		e.stopImmediatePropagation();
		e.preventDefault();
		showGroupFoods($(this)["0"].attributes["0"].nodeValue);
	});
}

    // var els = document.getElementsByClassName("pix");
    // function handleClick(e) {
    //   console.log(this);
    // }
    // for(var i=0 ; i < els.length ; i++){
    //   els[i].addEventListener("click", handleClick, false);
    // }

function	showGroupFoods(e){	
  var url = '/groups/' + e;
  $.getJSON(url, function(response){
  	var group = response;
// debugger;
// console.log(group);
  for (var i = group.foods.length - 1; i >= 0; i--) {
  // $("#show_group_foods").append(group.foods[i].name + "<br>");
  $("#show_group_foods").append(group.foods[i].name + "<br>");
  }
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

function FoodConstructor(name, cals, group_id){
  this.name = name;
  this.cals = cals;
  this.group_id = group_id;
}

function MealBuilder(mealname, foods, da){
  this.mealname = mealname;
  this.foods = foods; 
  this.da = da
}
