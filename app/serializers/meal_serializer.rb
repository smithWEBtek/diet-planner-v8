class MealSerializer < ActiveModel::Serializer
  attributes :id, :mealdate, :mealname_id, :user_id, :food_id, :new_food , :qty, :note
  belongs_to :user
  belongs_to :mealname
  belongs_to :food
end
