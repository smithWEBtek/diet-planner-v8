class CreateMeals < ActiveRecord::Migration[5.0]
  def change
    create_table :meals do |t|
      t.date :mealdate
      t.integer :mealname_id
      t.integer :user_id
      t.integer :food_id
      t.string :new_food, default: ""
      t.integer :qty, default: 1
      t.text :note
      
      t.timestamps
    end
  end
end

