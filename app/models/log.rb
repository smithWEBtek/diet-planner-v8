class Log < ApplicationRecord
  belongs_to :user
  validates :note, presence: true
  validate :date_validator

  def date_validator
    errors[:date] << 'cannot be in the future.' unless date <= Time.zone.now
  end

  def total_log_cals
    meals.each do |meal|
      log_cals.push(meal.qty * meal.food.cals)
      log_cals.inject(0) { |sum, x| sum + x }
    end
    log_cals
  end
end