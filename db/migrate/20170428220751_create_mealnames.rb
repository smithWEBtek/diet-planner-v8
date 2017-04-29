class CreateMealnames < ActiveRecord::Migration[5.0]
  def change
    create_table :mealnames do |t|
      t.string :name
    end
  end
end
