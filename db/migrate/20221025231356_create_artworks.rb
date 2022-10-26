class CreateArtworks < ActiveRecord::Migration[7.0]
  def change
    create_table :artworks do |t|
      t.string :image
      t.string :title
      t.integer :year
      t.string :gallery
      t.string :exhibition
      t.text :notes
      t.date :seenDate
      t.integer :artist_id
      t.integer :user_id

      t.timestamps
    end
  end
end
