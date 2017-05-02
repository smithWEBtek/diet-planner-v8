
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
