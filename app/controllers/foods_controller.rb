class FoodsController < ApplicationController
  before_action :authorize_admin, only: [:edit, :update, :destroy]
  before_action :set_food, only: [:show, :edit, :update, :destroy]
  before_action :load_models

  def index
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @foods }
    end
  end
  
  def show
     respond_to do |format|
      format.html { render :show }
      format.json { render json: @food }
    end
  end

  def new
    @food = Food.new
  end

  def create
    @food = Food.new(food_params)
    if @food.save
      flash[:notice] = "Food created."
      redirect_to food_path(@food)
    else
      render :new
    end
  end

  def edit
  end

  def update
    @food.update(food_params)
    if @food.save
      flash[:notice] = "Food updated."
      redirect_to food_path(@food)
    else
      render :edit
    end
  end

  def destroy
    if @food.delete
      Meal.reset_meal_food_ids
      flash[:notice] = "Food deleted"
      redirect_to foods_path
    else
      flash[:notice] = @food.errors.full_messages
      redirect_to food_path(@food)
    end
  end

  private
    def set_food
      @food = Food.find_by_id(params[:id])
    end

    def food_params
      params.require(:food).permit(:name, :cals, :group_id)
    end
end
