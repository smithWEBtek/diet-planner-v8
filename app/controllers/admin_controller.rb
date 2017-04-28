class AdminController < ApplicationController
  # before_filter :authorize_admin, except: [:user_cancellation, :quotes, :group_update, :export_users_data]

  def new_user
    @user = User.new
    render 'admin/new_user'
  end

  def user_cancellation
    render '/welcome/goodbye'
  end

  # def group_update
  #   @foods = []
  #   Food.all.each do |food|
  #     if food.group.name == "No group chosen"
  #       @foods << food
  #     end
  #   end
  #   render 'groups/group_update'
  # end

  # def export_users_data
  #   @users = User.all
  #   render '/admin/export_users_data.csv.erb'
  # end

  def index
    @users = User.all
    # @logs = Log.all
    # @groups = Group.all
    @diets = Diet.all
    # @foods = Food.all
    # @meals = Meal.all
# , @logs, @groups, @diets, @foods, @meals]
      respond_to do |format|
      format.html { render 'admin/index' }
      format.json { render json: @users }
    end
  end

  def api_users
    @users = User.all
      respond_to do |format|
      format.html { render 'admin/index' }
      format.json { render json: @users }
    end
  end

  # def api_logs
  #   @logs = Log.all
  #     respond_to do |format|
  #     format.html { render 'admin/index' }
  #     format.json { render json: @logs }
  #   end
  # end

  def api_diets
    @diets = Diet.all
      respond_to do |format|
      format.html { render 'admin/index' }
      format.json { render json: @diets }
    end
  end

  # def api_foods
  #   @foods = Food.all
  #     respond_to do |format|
  #     format.html { render 'admin/index' }
  #     format.json { render json: @foods }
  #   end
  # end

  # def api_meals
  #   @meals = Meal.all
  #     respond_to do |format|
  #     format.html { render 'admin/index' }
  #     format.json { render json: @meals }
  #   end
  # end

  private
    def authorize_admin
      return unless !current_user.admin?
      redirect_to root_path, alert: 'Admins only, you have been redirected to HOME page.'
    end
end
