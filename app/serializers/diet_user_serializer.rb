class DietUserSerializer < ActiveModel::Serializer
  attributes :id, :name, :users
  has_many :users
end