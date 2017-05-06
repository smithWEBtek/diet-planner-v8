class MealSerializer < ActiveModel::Serializer
  attributes :id, :mealdate, :mealname, :mealname_id, :user_id, :food, :food_id, :new_food , :qty, :note
  belongs_to :user
  belongs_to :mealname
  belongs_to :food, serializer: FoodDetailSerializer
end
