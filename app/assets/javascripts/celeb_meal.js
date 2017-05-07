class CelebrityMeal {
	constructor(celeb, verb, adj, food, diet, phrase){
	this.celeb = celeb;
	this.verb = verb;
	this.adj = adj;
	this.food = food;
	this.diet = diet;
	this.phrase = phrase;
	}
	customQuote(){
		return (this.celeb + " " + this.verb + " " + this.adj + " " + this.food + " while on the " + this.diet + " diet, and said, \"" + this.phrase + "\"" + ".");
	}
}