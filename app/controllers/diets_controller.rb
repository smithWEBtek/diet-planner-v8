class DietsController < ApplicationController
  before_action :authorize_admin, only: [:edit, :update, :destroy]
  before_action :set_diet, only: [:show, :edit, :update, :destroy]
  before_action :load_models

  def index
    load_diet_stats
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @diets }
    end
  end

  def show
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @diet }
    end
  end

  def new
    @diet = Diet.new
  end

  def create
    @diet = Diet.find_or_create_by(name: diet_params[:name])
    if @diet.save
      respond_to do |format|
        format.html { redirect_to diet_path(@diet), layout: false }
        format.json { render json: @diet }
      end
    else
      redirect_to root_path
    end
  end

  def edit
  end
  
  def update
    @diet.update(diet_params)
    if @diet.save
      flash[:notice] = "Diet updated."
      redirect_to diet_path(@diet)
    else
      render :new
    end
  end
  
  def destroy
    @diet.reset_user_diet_id
    if @diet.delete
      flash[:notice] = "Diet deleted, user must choose new diet."
      redirect_to diets_path
    else
      flash[:notice] = @diet.errors.full_messages
      redirect_to diet_path(@diet)
    end
  end

  private
    def set_diet
      @diet = Diet.find_by_id(params[:id])
    end
    def diet_params
      params.require(:diet).permit(:name)
    end
end
