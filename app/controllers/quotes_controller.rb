class QuotesController < ApplicationController
  before_action :set_quote, only: [:show, :edit, :destroy]

    def random_quotes
      Quote.build_random_quotes
      redirect_to root_path
    end

    def clear_quotes
      Quote.destroy_all
      ActiveRecord::Base.connection.reset_pk_sequence!('quotes')
      redirect_to root_path
    end

    def new
      @quote = Quote.new
      render layout: false
    end

    def index
      @quotes = Quote.all
      respond_to do |format|
        format.html { render :index }
        format.json { render json: @quotes }
        format.csv
      end
    end

    def export_quotes_csv
      @quotes = Quote.all
      render '/quotes/index.csv.erb'
    end

    def show
      respond_to do |format|
        format.html { render :show }
        format.json { render json: @quote }
      end
    end

    def create
      @quote = Quote.build_quote_params(params)
      # @quote = Quote.new(quote_params)
      if @quote.save
        flash[:notice] = "Quote saved."
        redirect_to root_path
      else
        render :new
      end
    end

    def edit
    end

    def update
      @quote = Quote.find_by_id(params[:id])
      @quote.update(quote_params)
      if @quote.save
        flash[:notice] = "Quote updated."
        redirect_to root_path
      else
        redirect_to new_quote_path
      end
    end

    def destroy
      if @quote.delete
        flash[:notice] = "Quote deleted"
        redirect_to quotes_path
      else
        flash[:notice] = @quote.errors.full_messages
        redirect_to quote_path(@quote)
      end
    end

    private
      def set_quote
        @quote = Quote.find_by_id(params[:id])
      end

      def quote_params
        params.require(:quote).permit(:celeb_id, :verb_id, :adj_id, :food_id, :diet_id, :phrase_id, new_phrase_attributes: [:new_phrase])
      end
  end
