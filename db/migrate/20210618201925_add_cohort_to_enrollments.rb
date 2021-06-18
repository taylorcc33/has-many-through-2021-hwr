class AddCohortToEnrollments < ActiveRecord::Migration[6.1]
  def change
    add_column :enrollments, :cohort, :string
  end
end
