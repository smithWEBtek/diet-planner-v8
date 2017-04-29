class StaticController < ApplicationController

  def home
    @quotes = Quote.all
    @quote = Quote.new
    render :home
  end
end
