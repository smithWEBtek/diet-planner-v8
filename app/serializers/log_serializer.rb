class LogSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :note, :date
  belongs_to :user
end
