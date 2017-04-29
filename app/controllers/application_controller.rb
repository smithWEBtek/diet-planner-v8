class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :user_signed_in?, :admin?
  
  def self.user_signed_in?
    !!current_user
  end
  
  def authorize_admin
    return unless !current_user.admin?
    redirect_to root_path, alert: 'Admins only, you have been redirected to HOME page.'
  end
  
  def load_models
    @groups ||= Group.all.order('name')
    @foods ||= Food.all.order('id')
    @diets ||= Diet.all
    @users ||= User.all.order('username')
    # @meals = Meal.all #see meals_controller#index for custom @meals 
    @logs ||= Log.all.order('user.username')
    @mealnames ||= Mealname.all.order('name')
    @quotes ||= Quote.all
  end
  
  def load_diet_stats
    @vegans_cals = User.group_cals(User.vegans)
    @balancers_cals = User.group_cals(User.balancers)
    @lowcarbers_cals = User.group_cals(User.lowcarbers)
    @fishatarians_cals = User.group_cals(User.fishatarians)
    @carnivores_cals = User.group_cals(User.carnivores)
    @lumberjacks_cals = User.group_cals(User.lumberjacks)
    @vampires_cals = User.group_cals(User.vampires)
    @junkers_cals = User.group_cals(User.junkers)
    @vegans_meal_count = User.group_meals_count(User.vegans)
    @balancers_meal_count = User.group_meals_count(User.balancers)
    @lowcarbers_meal_count = User.group_meals_count(User.lowcarbers)
    @fishatarians_meal_count = User.group_meals_count(User.fishatarians)
    @carnivores_meal_count = User.group_meals_count(User.carnivores)
    @lumberjacks_meal_count = User.group_meals_count(User.lumberjacks)
    @vampires_meal_count = User.group_meals_count(User.vampires)
    @junkers_meal_count = User.group_meals_count(User.junkers)
    @vegans_avg_cals_per_meal = User.avg_cals_per_meal(User.vegans)
    @balancers_avg_cals_per_meal = User.avg_cals_per_meal(User.balancers)
    @lowcarbers_avg_cals_per_meal = User.avg_cals_per_meal(User.lowcarbers)
    @fishatarians_avg_cals_per_meal = User.avg_cals_per_meal(User.fishatarians)
    @carnivores_avg_cals_per_meal = User.avg_cals_per_meal(User.carnivores)
    @lumberjacks_avg_cals_per_meal = User.avg_cals_per_meal(User.lumberjacks)
    @vampires_avg_cals_per_meal = User.avg_cals_per_meal(User.vampires)
    @junkers_avg_cals_per_meal = User.avg_cals_per_meal(User.junkers)
  end
  
  def load_user_foods
    @user_foods = []
    Food.all.each do |food|
      if food.group.name == "No group chosen"
        @user_foods << food
      end
    end
    @user_foods
  end
end
