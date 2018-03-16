class CreatePrescriptions < ActiveRecord::Migration[5.1]
  def change
    create_table :prescriptions do |t|
      t.belongs_to :user, index: true
      t.string :name
      t.string :dose
      t.integer :count_goal
      t.string :recurring_period
      t.integer :taken
      t.datetime :last_taken
      t.boolean :goal_is_met
      t.date :start_date
      t.date :end_date
      t.text :notes

      t.timestamps
    end
  end
end
