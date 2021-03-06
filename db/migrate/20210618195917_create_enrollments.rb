class CreateEnrollments < ActiveRecord::Migration[6.1]
  def change
    create_table :enrollments do |t|
      t.belongs_to :student, null: false, foreign_key: true
      t.belongs_to :course, null: false, foreign_key: true
      t.string :type

      t.timestamps
    end
  end
end
