class Food < ApplicationRecord
  has_many :meals
  belongs_to :group
  validates :name, presence: true, uniqueness: true
  validates :cals, numericality: { greater_than: 0 }
end
