class Enrollment < ApplicationRecord
  belongs_to :student
  belongs_to :course

  def self.all_with_student_name
    return self.all.map do |enrollment|
      {
        id: enrollment.id,
        cohort: enrollment.cohort,
        student_id: enrollment.student_id,
        course_id: enrollment.course_id,
        student_name: enrollment.student.name,
        course_name: enrollment.course.name
      }
    end
  end
end
