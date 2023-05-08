class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name, null: false
      t.string :character_class, null: false
      t.integer :level, null: false
      t.json :stats, null: false
      t.json :skills, null: false
      t.json :traces, null: false
      t.json :eidolons, null: false

      t.timestamps
    end
  end
end
