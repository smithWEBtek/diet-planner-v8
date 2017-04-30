class Celeb < ApplicationRecord
  has_many :quotes
  validates :name, presence: true
  validates :name, uniqueness: true
end

