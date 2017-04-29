class CreateCelebs < ActiveRecord::Migration[5.0]
  def change
    create_table :celebs do |t|
      t.string :name

      t.timestamps
    end
  end
end
