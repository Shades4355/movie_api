class CreateMovieTable < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :director, null: false
      t.integer :release_year, null:false
      t.integer :upvotes, null:false
      t.integer :downvotes, null:false
    end
  end
end
