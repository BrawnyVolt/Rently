class CreateRentables < ActiveRecord::Migration[6.1]
  def change
    create_table :rentables do |t|
      t.string :property_type
      t.string :address
      t.int :beds
      t.int :baths
      t.int :property_id
      t.int :price
      t.string :contact_info
      t.string :img_url

      t.timestamps
    end
  end
end
