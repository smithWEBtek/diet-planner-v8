class Phrase < ApplicationRecord
  has_many :quotes
  validates :content, presence: true, uniqueness: true
end
