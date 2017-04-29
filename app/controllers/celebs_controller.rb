class CelebsController < ApplicationController
  before_action :authorize_admin, only: [:edit, :update, :destroy]
  before_action :set_celeb, only: [:show, :edit, :update, :destroy]
  before_action :load_models

  def index
    @celebs = Celeb.all
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @celebs }
    end
  end
  
  def show
     respond_to do |format|
      format.html { render :show }
      format.json { render json: @celeb }
    end
  end

  def new
    @celeb = Celeb.new
  end

  def create
    @celeb = Celeb.new(celeb_params)
    if @celeb.save
      flash[:notice] = "celeb created."
      respond_to do |format|
      	format.html {  redirect_to celeb_path(@celeb) }
      	format.json { render json: @celeb }
    end
    else
      render :new
    end
  end

  def edit
  end

  def update
    @celeb.update(celeb_params)
    if @celeb.save
      flash[:notice] = "celeb updated."
      redirect_to celeb_path(@celeb)
    else
      render :edit
    end
  end

  def destroy
    if @Celeb.delete
      flash[:notice] = 'Celeb deleted'
      redirect_to user_Celebs_path(@Celeb.user)
    else
      flash[:notice] = 'Celeb NOT deleted'
      redirect_to user_Celebs_path(current_user)
    end
  end

  private
    def set_celeb
      @celeb = Celeb.find_by_id(params[:id])
    end

    def celeb_params
      params.require(:celeb).permit(:name)
    end
end

