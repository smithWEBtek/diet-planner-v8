class StaticController < ApplicationController

  def home
    @quotes = Quote.all
    @celeb = Celeb.new
    @celebs = Celeb.all
    @food = Food.new
    @foods = Food.all 
    render :home
  end
end
