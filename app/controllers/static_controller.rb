class StaticController < ApplicationController

  def home    
    render :home
  end

	def celeb_quotes
    @quotes = Quote.all

    @celeb = Celeb.new
    @celebs = Celeb.all
    
    @food = Food.new
    @foods = Food.all
    
    @diet = Diet.new
    @diets = Diet.all
    
    @phrase = Phrase.new
    @phrases = Phrase.all
    
    @groups = Group.all
    
    @users = User.all
		render :celeb_quotes
	end
	
end
