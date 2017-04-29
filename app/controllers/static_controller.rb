class StaticController < ApplicationController

  def home
    @quotes = Quote.all
    @celeb = Celeb.new
    # @celebs = Celeb.all
    render :home
  end
end
