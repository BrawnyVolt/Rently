class CreateRentableUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :rentable_users do |t|
      t.integer :user_id
      t.integer :property_id

      t.timestamps
    end
  end
end
