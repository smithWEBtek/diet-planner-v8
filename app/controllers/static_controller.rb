class StaticController < ApplicationController

  def home
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
    render :home
  end
end
