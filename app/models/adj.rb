class Adj < ApplicationRecord
  has_many :quotes
  validates :name, presence: true
end

