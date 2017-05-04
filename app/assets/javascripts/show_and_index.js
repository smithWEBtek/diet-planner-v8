$(function(){
	userIndex();
	// foodIndex();
	// foodGroupIndex();
	// mealIndex();
	// mealNamesIndex();
	// dietIndex();
	// userLogsIndex();
})

function userIndex(){
	$("span#users_index").on("click", function(e){
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


// function foodIndex(){
// 	// listen to a link
// 	// hijack the link jquery
// 	// launch an ajax request
// 	// process the response
// 	// inject into the DOM
// };