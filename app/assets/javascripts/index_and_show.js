$(function(){
	userIndex();
	foodIndex();
	// foodGroupIndex();
	mealIndex();
	// mealNamesIndex();
	// dietIndex();
	// userLogsIndex();
})

function userIndex(){
	$("span#users_index").on("click", function(e){
		$("#user").html("");
		$("#food").html("");
		$("#meal").html("");
		e.stopImmediatePropagation();
		e.preventDefault();
	$.ajax({
		type: 'get',
		url: '/api_users.json',
		dataType: 'json',
		success: function(response){
		for (var i = response.length - 1; i >= 0; i--) {
			var username = response[i].username;
			var email = response[i].email;
			var weight = response[i].weight;
			var diet = response[i].diet.name;
			var user = username + "  "+ email+ "  "+ weight + "lbs " + "   " + diet + "  <br>";
			$("#user").append(user);
				}
			}
		});
	});
}

function foodIndex(){
	$("span#foods_index").on("click", function(e){
		$("#user").html("");
		$("#food").html("");
		$("#meal").html("");
		e.stopImmediatePropagation();
		e.preventDefault();
	$.ajax({
		type: 'get',
		url: '/api_foods.json',
		dataType: 'json',
		success: function(response){
		for (var i = response.length - 1; i >= 0; i--) {
			var name = response[i].name;
			var group = response[i].group.name;
			var food = name + "  "+ group + "<br>";
			$("#food").append(food);
				}
			}
		});
	});
}

function mealIndex(){
	$("span#meals_index").on("click", function(e){
		$("#user").html("");
		$("#food").html("");
		$("#meal").html("");
		e.stopImmediatePropagation();
		e.preventDefault();
	$.ajax({
		type: 'get',
		url: '/api_meals.json',
		dataType: 'json',
		success: function(response){
// debugger;

		for (var i = response.length - 1; i >= 0; i--) {
			var mealname = response[i].mealname.name;
			var food = response[i].food.name;
			var meal = mealname + ": " + food + "<br>";
			$("#meal").append(meal);
				}
			}
		});
	});
}
