class PhotoTable < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :image_url
      t.string :title
      t.string :user_name

      t.timestamps
    end
  end
end
