class FoodDetailSerializer < ActiveModel::Serializer
  attributes :id, :name, :cals
  has_many :meals
end
