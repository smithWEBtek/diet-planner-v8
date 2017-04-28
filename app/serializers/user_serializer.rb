class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :role, :email, :weight, :diet_id
  belongs_to :diet
end
