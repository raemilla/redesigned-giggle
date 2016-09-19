class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
      t.references :pitch
      t.references :student

      t.timestamps
    end
  end
end
