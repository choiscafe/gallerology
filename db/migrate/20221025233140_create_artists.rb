class CreateArtists < ActiveRecord::Migration[7.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :birthPlace
      t.string :activeYears

      t.timestamps
    end
  end
end
