class MealnameSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :meals
end
