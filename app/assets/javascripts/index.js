class CelebrityMeal {
	constructor(celeb, food, phrase){
	this.celeb = celeb;
	this.verb = verb;
	this.adj = adj;
	this.food = food;
	this.diet_id = diet_id;
	this.phrase = phrase;
	}
	customQuote(){
		return (this.celeb + " " + this.verb + " " + this.adj + " " + this.food + " while on the " + this.diet_id + " diet, and said, \"" + this.phrase + "\"" + ".");
	}
}
// function customQuote() {	
// 	$(".create_quote").on("click", function(e) {
// 	$(".show_quote").html("");
//  		e.stopImmediatePropagation();
// 		e.preventDefault();

// 		alert("button workss")
// 		// create an instance of CelebrityMeal
// 		// execute the sayPhrase function
// 		// save results to a variable
// 		// fire an AJAX post request to save the Object(s)
// 		// display the CelebrityMeal with the Phrase, in the DOM
// 	});
// }


// var lunch1 = new CelebrityMeal("Max", "Louis CK", "burgers", "Dennys", "you gonna eat that?");
// lunch1.sayPhrase();


// class CelebQuote extends CelebrityMeal {
//     sayHello() {
//       super.sayHello()
//       console.log("I am a pretty big deal!");
//     }
// }
 
// var lunch1 = new CelebrityMeal("Max", "Louis CK", "burgers", "you gonna eat that?");
// lunch1.sayHello;


// first the user creates new celebs, foods, and phrases
// js function chooses from them randomly and produces instances of CelebrityMeal
// each instance then calls 'customPhrase'
// result is injected into the DOM

// lunch1.sayPhrase();

// when a special button is clicked
