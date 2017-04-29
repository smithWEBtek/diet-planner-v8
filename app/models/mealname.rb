class Mealname < ApplicationRecord
  has_many :meals
  validates :name, presence: true, uniqueness: true
  validates :name, format: { with: /\A[A-Z]/, message: 'cannot have leading empty space & must begin with a capital letter' }
end