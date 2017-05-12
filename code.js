// Hoisting
function hoisting() {
	var a;
	var theSecondHoist;
	function theFirstHoist() {
		return "the first hoist";
	}	

	console.log(a);
	console.log(theFirstHoist());
	console.log(theSecondHoist);
	console.log(theSecondHoist());

	a = "a";	
	theSecondHoist = function() {
		return "the second hoist";
	}
}

hoisting();
// undefined
// "the first hoist"
// undefined
// TypeError


// "this"
var game = "pong";
var system = {
	game: "astroids",
	properties: {
		game: "galaga",
		getGame: function() {
			return this.game;
		}
	}
}

console.log(system.properties.getGame()); // "galaga"
var getTheGameName = system.properties.getGame;
console.log(getTheGameName()); // "pong"



<table>
  <tr align="left">
    <th>Diet</th>
  </tr>
  <% diets.each do |diet| %>
    <tr>
      <td><%= link_to diet.name, diet_path(diet), {data-id: diet.id, class: "diet_show" } %></td>
    </tr>
  <% end %>
</table>