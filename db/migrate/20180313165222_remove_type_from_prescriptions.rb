class RemoveTypeFromPrescriptions < ActiveRecord::Migration[5.1]
  def change
    remove_column :prescriptions, :type, :string
  end
end
