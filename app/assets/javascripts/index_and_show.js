$(function(){
	usersIndex();
	userShow();
	foodsIndex();
	foodShow();
	groupsIndex();
	// groupShow();
	mealsIndex();
	// mealShow();
	dietsIndex();
	// dietShow();
	mealnamesIndex();
})

function usersIndex(){
	$("#users_index").on('click', function(e){
		$("#app-container").html("");
		e.stopImmediatePropagation();
		e.preventDefault();
		// history.replaceState(null, null, "/users")
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
			$("#app-container").append("<p data-id=" + id + ">" + user + "</p>");
				}
		userShow(id);
			}
		});
	});
}

function userShow(id){
	$("#users p").on("click", function(e){
		$("#app-container").html("");
		var id = parseInt(this.dataset.id);
		// history.replaceState(null, null,"/users/" + id)
		e.preventDefault();
		$.ajax({
			type: 'get',
			url: '/users/' + id, 
			dataType: 'json',
			success: function(response){
				$("#app-container").html("");
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

					var mealDate = meals[i].mealdate;
					var mealname = meals[i].mealname.name;
					var mealFood = meals[i].food.name;
					var mealQty = meals[i].qty;
					var mealCals = meals[i].food.cals;
					var mealTotalCals = mealQty * mealCals;
					var meal = mealDate + ": for " + mealname + ", I had " + mealQty + " " + mealFood + "(s). Adding " + mealTotalCals + " calories to my belly!"

					$("#user_show_meals").append(meal + "<br>");
					}
				$("#user_show_foods").append("<hr>" + "FOODS:" + "<br>");
					for (var i = foods.length - 1; i >= 0; i--) {
					$("#user_show_foods").append(foods[i].name + "<br>")
					}
				$("#user_show_logs").append("<hr>" + "LOGS:" + "<br>");
					for (var i = logs.length - 1; i >= 0; i--) {
					$("#user_show_logs").append(logs[i].note + "<br>")	
					}
				$("#app-container").append("<hr>");
			}
		})
	})
}

function foodsIndex(){
	$("span#foods_index").on("click", function(e){
		$("#app-container").html("");
		e.stopImmediatePropagation();
		e.preventDefault();
		// history.replaceState(null, null, "/foods")
		$.ajax({
			type: 'get',
			url: '/api_foods.json',
			dataType: 'json',
			success: function(response){
				for (var i = response.length - 1; i >= 0; i--) {
					var id = response[i].id;
					var name = response[i].name;
					var group = response[i].group.name;
					var food = name + "  "+ group + "<br>";
					$("#app-container").append("<p data-id=" + id + ">" + food + "</p>");
					foodShow();
				}
			}
		});
	});
}

function foodShow(){
	$("#foods p").on("click", function(e){
		$("#app-container").html("");
		var id = parseInt(this.dataset.id);
		// history.replaceState(null, null,"/foods/" + id)
		e.stopImmediatePropagation();
		e.preventDefault();
		$.ajax({
			type: 'get',
			url: '/foods/' + id, 
			dataType: 'json',
			success: function(response){
			$("#app-container").html("");
				var id = response.id; 
				var foodname = response.name;
				$("#app-container").html("ID: " + id + "<br> Name: " + foodname);
			}
		})
	})
}

function mealsIndex(){
	$("span#meals_index").on("click", function(e){
		$("#app-container").html("");
		e.stopImmediatePropagation();
		e.preventDefault();
		// history.replaceState(null, null, "/meals")
		$.ajax({
			type: 'get',
			url: '/api_meals.json',
			dataType: 'json',
			success: function(response){
			for (var i = response.length - 1; i >= 0; i--) {
				var mealname = response[i].mealname.name;
				var food = response[i].food.name;
				var meal = mealname + ": " + food + "<br>";
				$("#app-container").append(meal);
				}
			}
		});
	});
}

function mealnamesIndex(){
	$("span#mealnames_index").on("click", function(e){
		$("#app-container").html("");
		e.stopImmediatePropagation();
		e.preventDefault();
		// history.replaceState(null, null, "/mealnames")
		$.ajax({
			type: 'get',
			url: '/api_mealnames',
			dataType: 'json',
			success: function(response){
			for (var i = response.length - 1; i >= 0; i--) {
				$("#app-container").append(response[i].name + "<br>");
				}
			}
		});
	});
}

function groupsIndex(){
	$("span#groups_index").on("click", function(e){
		$("#app-container").html("");
		e.stopImmediatePropagation();
		e.preventDefault();
		// history.replaceState(null, null, "/groups")
		$.ajax({
			type: 'get',
			url: '/api_groups',
			dataType: 'json',
			success: function(response){
			for (var i = response.length - 1; i >= 0; i--) {
				$("#app-container").append(response[i].name + "<br>");
				}
			}
		});
	});
}

function dietsIndex(){
	$("span#diets_index").on("click", function(e){
		$("#app-container").html("");
		e.stopImmediatePropagation();
		e.preventDefault();
		// history.replaceState(null, null, "/diets")
		$.ajax({
			type: 'get',
			url: '/api_diets',
			dataType: 'json',
			success: function(response){
			for (var i = response.length - 1; i >= 0; i--) {
				$("#app-container").append(response[i].name + "<br>");
				}
			}
		});
	});
}
