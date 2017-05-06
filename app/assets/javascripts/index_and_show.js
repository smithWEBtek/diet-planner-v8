$(function(){
	clearIndexAndShowArea();
	usersIndex();
	foodsIndex();
	groupsIndex();
	mealsIndex();
	mealnamesIndex();
	dietsIndex();
	userShow();
})

function clearIndexAndShowArea(){
	$("#users").html("");
	$("#foods").html("");
	$("#meals").html("");
	$("#mealnames").html("");
	$("#groups").html("");
	$("#diets").html("");
	$("#user_show").html("");
	$("#user_show_meals").html("");
	$("#user_show_foods").html("");
	$("#user_show_logs").html("");
	$("#user_show_id").html("");
	$("#user_show_username").html("");
	$("#user_show_role").html("");
	$("#user_show_email").html("");
	$("#user_show_weight").html("");
	$("#user_show_diet").html("");
}

function usersIndex(){
	$("span#users_index").on('click', function(e){
		clearIndexAndShowArea();
		e.stopImmediatePropagation();
		e.preventDefault();
	$.ajax({
		type: 'get',
		url: '/api_users.json',
		dataType: 'json',
		success: function(response){
		for (var i = response.length - 1; i >= 0; i--) {
			var id = response[i].id;
			var username = response[i].username;
			var email = response[i].email;
			var weight = response[i].weight;
			var diet = response[i].diet.name;
			var user = username + "  "+ email+ "  "+ weight + "lbs " + "   " + diet + "  <br>";			
			$("#users").append("<p data-id=" + id + ">" + user + "</p>");
				}
		userShow(id);
			}
		});
	});
}

function userShow(id){
	$("#users p").on("click", function(e){
		clearIndexAndShowArea();
		var id = parseInt(this.dataset.id);
		e.preventDefault();
		$.ajax({
			type: 'get',
			url: '/users/' + id, 
			dataType: 'json',
			success: function(response){
				clearIndexAndShowArea();
				var id = response.id; 
				var username = response.username;
				var role = response.role;
				var email = response.email; 
				var weight = response.weight; 
				var diet = response.diet;
				var meals = response.meals; 
				var foods = response.foods;
				var logs = response.logs;
			
				$("#user_show_id").html("ID: " + id);
				$("#user_show_username").html("Username: " + username);
				$("#user_show_role").html("Role: " + role);
				$("#user_show_email").html("Email: " + email);
				$("#user_show_weight").html("Weight: " + weight);
				$("#user_show_diet").html("Diet: " + diet.name);

				$("#user_show_meals").append("<hr>" + "MEALS:" + "<br>");
					for (var i = meals.length - 1; i >= 0; i--) {

					var mealdate = meals[i].date
					var mealname = meals[i].mealname.name;
					var mealfood = meals[i].food.name;
					var mealqty = meals[i].meal.qty;
					var mealcals = meals[i].meal.cals;
					var meal = mealdate + ": for " + mealname + ", I had " + mealqty + mealfood + "'s, and @ " + mealcals + "per " + mealfood + ", it means I added " + mealqty * mealcals + "to my belly!"
					$("#user_show_meals").append(meal);
					}
				$("#user_show_foods").append("<hr>" + "FOODS:" + "<br>");
					for (var i = foods.length - 1; i >= 0; i--) {
					$("#user_show_foods").append(foods[i].name + "<br>")
					}
				$("#user_show_logs").append("<hr>" + "LOGS:" + "<br>");
					for (var i = logs.length - 1; i >= 0; i--) {
					$("#user_show_logs").append(logs[i].note + "<br>")	
					}
				$("#user_show_logs").append("<hr>");
			}
		})
	})
}

function foodsIndex(){
	$("span#foods_index").on("click", function(e){
		clearIndexAndShowArea();
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
			$("#foods").append(food);
				}
			}
		});
	});
}

function mealsIndex(){
	$("span#meals_index").on("click", function(e){
		clearIndexAndShowArea();
		e.stopImmediatePropagation();
		e.preventDefault();
	$.ajax({
		type: 'get',
		url: '/api_meals.json',
		dataType: 'json',
		success: function(response){
		for (var i = response.length - 1; i >= 0; i--) {
			var mealname = response[i].mealname.name;
			var food = response[i].food.name;
			var meal = mealname + ": " + food + "<br>";
			$("#meals").append(meal);
				}
			}
		});
	});
}

function mealnamesIndex(){
	$("span#mealnames_index").on("click", function(e){
		clearIndexAndShowArea();
		e.stopImmediatePropagation();
		e.preventDefault();
	$.ajax({
		type: 'get',
		url: '/api_mealnames',
		dataType: 'json',
		success: function(response){
		for (var i = response.length - 1; i >= 0; i--) {
			$("#mealnames").append(response[i].name + "<br>");
				}
			}
		});
	});
}

function groupsIndex(){
	$("span#groups_index").on("click", function(e){
		clearIndexAndShowArea();
		e.stopImmediatePropagation();
		e.preventDefault();
	$.ajax({
		type: 'get',
		url: '/api_groups',
		dataType: 'json',
		success: function(response){
		for (var i = response.length - 1; i >= 0; i--) {
			$("#groups").append(response[i].name + "<br>");
				}
			}
		});
	});
}

function dietsIndex(){
	$("span#diets_index").on("click", function(e){
		clearIndexAndShowArea();
		e.stopImmediatePropagation();
		e.preventDefault();
	$.ajax({
		type: 'get',
		url: '/api_diets',
		dataType: 'json',
		success: function(response){
		for (var i = response.length - 1; i >= 0; i--) {
			$("#diets").append(response[i].name + "<br>");
				}
			}
		});
	});
}
