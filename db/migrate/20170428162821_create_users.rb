class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username
      t.integer :weight, default: 500
      t.integer :diet_id, default: 1
      t.string :image
      t.integer :role, default: 0

    end
  end
end
