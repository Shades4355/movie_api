class CreateMovieTable < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :display_title, null: false
      t.string :headline, null: false
      t.integer :publication_date, null:false
      t.integer :upvotes, null:false
      t.integer :downvotes, null:false
    end
  end
end
