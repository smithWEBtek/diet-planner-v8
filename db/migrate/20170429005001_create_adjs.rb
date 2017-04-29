class CreateAdjs < ActiveRecord::Migration[5.0]
  def change
    create_table :adjs do |t|
      t.string :name
      
      t.timestamps
    end
  end
end
