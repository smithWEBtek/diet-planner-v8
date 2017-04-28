class Diet < ApplicationRecord
  has_many :users
  validates :name, presence: true, uniqueness: true
  validates :name, format: { with: /\A[A-Z]/, message: 'cannot have leading empty space & must begin with a capital letter' }

  def reset_user_diet_id
    users.each do |user|
      user.diet_id = 1
      user.save
    end
  end
end
