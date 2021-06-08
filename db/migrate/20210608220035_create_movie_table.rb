class CreateMovieTable < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.integer :upvotes
      t.integer :downvotes
    end
  end
end
