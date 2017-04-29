class StaticController < ApplicationController

  def home
    @quotes = Quote.all
    render :home
  end
end
