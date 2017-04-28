class CreateFoods < ActiveRecord::Migration[5.0]
  def change
    create_table :foods do |t|
      t.string :name
      t.integer :group_id, default: 1
      t.integer :cals, default: 1

      t.timestamps
    end
  end
end