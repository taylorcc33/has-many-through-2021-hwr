class RemoveTypeFromEnrollments < ActiveRecord::Migration[6.1]
  def change
    remove_column :enrollments, :type, :string
  end
end
