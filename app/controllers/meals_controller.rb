class Meal < ApplicationRecord
  belongs_to :user
  belongs_to :mealname
  belongs_to :food

  validates :qty, presence: true, numericality: true
  validate :valid_id_or_new_food, :warn_existing_food_saved
 
  def valid_id_or_new_food
    if food_id.nil? && new_food == ''
      errors.add(:food_id, 'must exist in drop-down menu, or please enter a new_food.')
    end
  end

  def warn_existing_food_saved
    if !food_id.nil? && new_food != ''
      errors.add(:food_id, "drop-down choice will be saved, please clear the 'New_food' box.")
    end
  end

  def total_cals
    food.cals * qty
  end

  def self.reset_meal_food_ids
    all.each do |meal|
      next unless Food.find_by_id(meal.food_id).nil?
      food = Food.find_or_create_by(name: 'food deleted')
      meal.food_id = food.id
      meal.save
    end
  end

  def find_or_create_food(new_food_name)
    @new_food = Food.find_or_create_by(name: new_food_name)
    @new_food.id
  end
end
