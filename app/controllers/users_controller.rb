class UsersController < ApplicationController
  before_action :authorize_admin, only: [:destroy]
  before_action :set_user, only: [:export_csv, :show, :edit, :update, :destroy]
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, only: [:show]
  before_action :load_models

  def new
    @user = User.new
    authorize_admin
  end

  def export_csv
    render '/users/user_data.csv.erb'
  end

  def show
    @user = User.find_by_id(params[:id])
    @user = current_user unless current_user.admin?
    @meals_count = @user.meals.count
    @user_cals = @user.user_cals
    @user_avg_cals_per_meal = @user.user_avg_cals_per_meal
    load_diet_stats
  end

  def create
    @user = User.create(user_params)
    if @user.save
      flash[:notice] = "Welcome, #{@user.username.upcase}! you have successfully signed up, please SIGN IN."
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
    @user
    @log = @user.logs.build
  end

  def update
    @user.update_without_password(user_params)
    if @user.save
      flash[:notice] = 'User Account updated.'
      redirect_to user_path(@user)
    else
      render :edit
    end
  end

  def destroy
    if @user.delete
      flash[:notice] = 'User deleted'
      redirect_to root_path
    else
      flash[:notice] = @user.errors.full_messages
      redirect_to user_path(@user)
    end
  end

  private
	  def set_user
	    @user = User.find_by_id(params[:id])
	  end

	  def user_params
	    params.require(:user).permit(:username, :role, :email, :password, :weight, :diet_id,
	      logs_attributes: [:user_id, :date, :note],
	       meals_attributes: [:user_id, :mealdate, :mealname_id, :food_id, :new_food, :qty, :note])
	  end
end
