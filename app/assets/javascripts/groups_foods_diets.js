
function attachListenersGroups() {	
	$(".groups p").on("click", function(e) {
 		e.stopImmediatePropagation();
		e.preventDefault();
		showGroupFoods($(this)["0"].attributes["0"].nodeValue);
	});
}

function	showGroupFoods(e){	
  var url = '/groups/' + e;
  $.getJSON(url, function(response){
  	var group = response;
  for (var i = group.foods.length - 1; i >= 0; i--) {
  $("#show_group_foods").append(group.foods[i].name + "<br>");
  }
	});
}

function indexGroupsFoodsDiets(){
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
 
function CelebrityMeal(user, celeb, food, phrase){
	this.user = user;
	this.celeb = celeb;
	this.food = food;
	this.phrase = phrase;
}

CelebrityMeal.prototype.sayPhrase = function(){
 return (this.user + " dined on " + this.food + " with " + this.celeb + " and said, \"" + this.phrase + "\"" + ".");
}
 
// var lunch1 = new CelebrityMeal("Max", "Louis CK", "burgers", "Dennys", "you gonna eat that?");
// lunch1.sayPhrase();

// first the user creates new celebs, foods, and phrases
// js function chooses from them randombly and produces instances of CelebrityMeal
// each instance then calls 'sayPhrase'
// result is injected into the DOM

// lunch1.sayPhrase();

// when a special button is clicked





