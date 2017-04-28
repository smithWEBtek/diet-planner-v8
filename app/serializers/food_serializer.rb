class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :meals
  belongs_to :group
end
