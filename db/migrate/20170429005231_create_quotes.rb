class CreateQuotes < ActiveRecord::Migration[5.0]
  def change
    create_table :quotes do |t|
      t.integer :phrase_id
      t.integer :celeb_id
      t.integer :verb_id
      t.integer :food_id
      t.integer :adj_id
      t.integer :diet_id

      t.timestamps
    end
  end
end
