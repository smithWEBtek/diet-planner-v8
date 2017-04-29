class PhraseSerializer < ActiveModel::Serializer
  attributes :id, :content
  has_many :quotes
end
