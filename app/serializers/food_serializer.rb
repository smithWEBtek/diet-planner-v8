class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :meals, serializer: MealFoodsSerializer
  belongs_to :group

end
