class MealsController < ApplicationController
  before_action :set_meal, only: [:show, :edit, :update, :destroy]
  before_action :load_models

  def index
    if current_user.admin?
      @meals = Meal.all.sort_by {|m| [m.created_at, m.mealname_id]}
    else
      @meals = current_user.meals.sort_by {|m| [m.created_at, m.mealname_id]}
    end
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @meals }
    end
  end

  def show
     respond_to do |format|
      format.html { render :show }
      format.json { render json: @meal }
    end
  end

  def new
    current_user.meals.build(mealname_id: 1)
    current_user.meals.build(mealname_id: 2)
    current_user.meals.build(mealname_id: 3)
  end
  
  def create
    @meal = Meal.create(meal_params)
    if @meal.save
      flash[:notice] = "Meal created."
      redirect_to user_path(current_user)
    else
      flash[:notice] = @meal.errors.full_messages
      render 'meals/new'
    end
  end

  def edit
  end

  def update
    @meal.update(meal_params)
    if @meal.save
      flash[:message] = "Meal was updated."
      redirect_to meal_path(@meal)
    elsif params[:meal][:new_food]!=""
      food = Food.find_or_create_by(name: params[:meal][:new_food])
      @meal.food = food
      @meal.new_food = ""
      if @meal.save
      flash[:message] = "Meal was updated."
      redirect_to meal_path(@meal)
    else
      flash[:message] = @meal.errors.full_messages
      render :edit
      end
    end
  end

  def destroy
    if @meal.delete
      flash[:notice] = "Meal deleted"
      redirect_to user_logs_path(@meal.user)
    else 
      flash[:notice] = @meal.errors.full_messages
      redirect_to meal_path(@meal)
    end
  end

  private
    def set_meal 
      @meal = Meal.find_by_id(params[:id])
    end

    def meal_params
      params.require(:meal).permit(:mealdate, :mealname_id, :user_id, :food_id, :new_food, :qty, :note)
    end
end
