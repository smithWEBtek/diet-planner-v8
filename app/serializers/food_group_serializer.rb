class FoodGroupSerializer < ActiveModel::Serializer
  attributes :id, :name, :group
  belongs_to :group
end
