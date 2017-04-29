class Celeb < ApplicationRecord
  has_many :quotes
  validates :name, uniqueness: true
  validates :name, presence: true
end

