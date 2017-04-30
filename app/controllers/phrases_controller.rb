class PhrasesController < ApplicationController
  before_action :authorize_admin, only: [:edit, :update, :destroy]
  before_action :set_phrase, only: [:show, :edit, :update, :destroy]
  before_action :load_models

  def index
    @phrases = Phrase.all
    respond_to do |format|
      format.html { render :index, layout: false }
      format.json { render json: @phrases }
    end
  end
  
  def show
     respond_to do |format|
      format.html { render :show, layout: false }
      format.json { render json: @phrase }
    end
  end

  def new
    @phrase = Phrase.new
  end

  def create
    @phrase = Phrase.find_or_create_by(phrase_params)
    if @phrase.save
      render 'static/new_phrase', layout: false
      # respond_to do |format|
      # 	format.html { redirect_to 'phrases/new_phrase' }
      # 	format.json { render json: @phrase }
      # end
    else
      render 'phrases/show'
    end
  end

  def edit
  end

  def update
    @phrase.update(phrase_params)
    if @phrase.save
      flash[:notice] = "phrase updated."
      redirect_to phrase_path(@phrase)
    else
      render :edit
    end
  end

  def destroy
    if @phrase.delete
      flash[:notice] = 'phrase deleted'
      redirect_to user_phrases_path(@phrase.user)
    else
      flash[:notice] = 'phrase NOT deleted'
      redirect_to user_phrases_path(current_user)
    end
  end

  private
    def set_phrase
      @phrase = phrase.find_by_id(params[:id])
    end

    def phrase_params
      params.require(:phrase).permit(:content)
    end
end


