class StaticController < ApplicationController

  def home
    @quotes = Quote.all
    @celeb = Celeb.new
    render :home
  end
end
