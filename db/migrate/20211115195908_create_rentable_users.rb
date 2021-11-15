class CreateRentableUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :rentable_users do |t|
      t.int :user_id
      t.int :property_id

      t.timestamps
    end
  end
end
