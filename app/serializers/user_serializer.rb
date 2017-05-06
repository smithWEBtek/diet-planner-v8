class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :role, :email, :weight, :diet_id
  belongs_to :diet
  has_many :meals
  has_many :foods, through: :meals
  has_many :logs
end
