$(function () {
	clearIndexAndShowAreas();
	usersIndex();
	userShow();
	foodsIndex();
	foodShow();
	groupsIndex();
	// groupShow();
	mealsIndex();
	// mealShow();
	dietsIndex();
	dietShow();
	mealnamesIndex();
})

function clearIndexAndShowAreas() {
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

function usersIndex() {
	$("span#users_index").on('click', function (e) {
		clearIndexAndShowAreas();
		e.stopImmediatePropagation();
		e.preventDefault();
		history.replaceState(null, null, "/users")
		$.ajax({
			type: 'get',
			url: '/api_users.json',
			dataType: 'json',
			success: function (response) {
				for (var i = response.length - 1; i >= 0; i--) {
					var id = response[i].id;
					var username = response[i].username;
					var email = response[i].email;
					var weight = response[i].weight;
					var diet = response[i].diet.name;
					var user = username + "  " + email + "  " + weight + "lbs " + "   " + diet + "  <br>";
					$("#users").append("<p data-id=" + id + ">" + user + "</p>");
				}
				userShow();
			}
		});
	});
}

function userShow() {
	$("#users p").on("click", function (e) {
		clearIndexAndShowAreas();
		var id = parseInt(this.dataset.id);
		history.replaceState(null, null, "/users/" + id)
		e.preventDefault();
		$.ajax({
			type: 'get',
			url: '/users/' + id,
			dataType: 'json',
			success: function (response) {
				clearIndexAndShowAreas();
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
				$("#user_show_logs").append("<hr>");
			}
		})
	})
}

function foodsIndex() {
	$("span#foods_index").on("click", function (e) {
		clearIndexAndShowAreas();
		e.stopImmediatePropagation();
		e.preventDefault();
		history.replaceState(null, null, "/foods")
		$.ajax({
			type: 'get',
			url: '/api_foods.json',
			dataType: 'json',
			success: function (response) {
				for (var i = response.length - 1; i >= 0; i--) {
					var id = response[i].id;
					var name = response[i].name;
					var group = response[i].group.name;
					var food = name + "  " + group + "<br>";
					$("#foods").append("<p data-id=" + id + ">" + food + "</p>");
					foodShow();
				}
			}
		});
	});
}

function foodShow() {
	$("#foods p").on("click", function (e) {
		clearIndexAndShowAreas();
		var id = parseInt(this.dataset.id);
		history.replaceState(null, null, "/foods/" + id)
		e.stopImmediatePropagation();
		e.preventDefault();
		$.ajax({
			type: 'get',
			url: '/foods/' + id,
			dataType: 'json',
			success: function (response) {
				clearIndexAndShowAreas();
				var id = response.id;
				var foodname = response.name;
				$("#food_show").html("ID: " + id + "<br> Name: " + foodname);
			}
		})
	})
}

function mealsIndex() {
	$("span#meals_index").on("click", function (e) {
		clearIndexAndShowAreas();
		e.stopImmediatePropagation();
		e.preventDefault();
		history.replaceState(null, null, "/meals")
		$.ajax({
			type: 'get',
			url: '/api_meals.json',
			dataType: 'json',
			success: function (response) {
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

function mealnamesIndex() {
	$("span#mealnames_index").on("click", function (e) {
		clearIndexAndShowAreas();
		e.stopImmediatePropagation();
		e.preventDefault();
		history.replaceState(null, null, "/mealnames")
		$.ajax({
			type: 'get',
			url: '/api_mealnames',
			dataType: 'json',
			success: function (response) {
				for (var i = response.length - 1; i >= 0; i--) {
					$("#mealnames").append(response[i].name + "<br>");
				}
			}
		});
	});
}

function groupsIndex() {
	$("span#groups_index").on("click", function (e) {
		clearIndexAndShowAreas();
		e.stopImmediatePropagation();
		e.preventDefault();
		history.replaceState(null, null, "/groups")
		$.ajax({
			type: 'get',
			url: '/api_groups',
			dataType: 'json',
			success: function (response) {
				for (var i = response.length - 1; i >= 0; i--) {
					$("#groups").append(response[i].name + "<br>");
				}
			}
		});
	});
}

function dietsIndex() {
	$("span#diets_index").on("click", function (e) {
		clearIndexAndShowAreas();
		e.stopImmediatePropagation();
		e.preventDefault();
		history.replaceState(null, null, "/diets")
		$.ajax({
			type: 'get',
			url: '/api_diets',
			dataType: 'json',
			success: function (response) {
				for (var i = response.length - 1; i >= 0; i--) {
					$("#app-container").append(response[i].name + "<br>");
				}
			}
		});
		dietShow();
	});
}

function dietShow() {
	$(".diet_show").on("click", function (e) {
		clearIndexAndShowAreas();
		var id = parseInt(e.target.dataset.id);
		history.replaceState(null, null, "/diets/" + id)
		e.stopImmediatePropagation();
		e.preventDefault();
		$.ajax({
			type: 'get',
			url: '/diets/' + id,
			dataType: 'json',
			success: function (response) {
				var users = response.users;
				var id = response.id;
				var dietname = response.name;
				$("#diet_index_show").html("<h4>ID: " + id + "<br> Diet: " + dietname + "</h4><br> Users on the " + dietname + " diet: <br>");
				if (users.length >= 1) {
					for (i = 0, l = users.length; i < l; i++) {
						$("#diet_index_show").append("<a href='/users/" + id + "'>" + users[i].email + "</a><br>")
					}
				}
			}
		})
	})
}
