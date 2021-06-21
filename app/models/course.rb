class Course < ApplicationRecord
  has_many :enrollments, dependent: :destroy
  has_many :students, through: :enrollments

 def self.all_with_enrollemnts_and_students
  courses = Course.all

  course_enrollments = courses.map do |course|
    {
      course: course, course_enrollments: course.enrollments.map do |enrollment|
        {
          enrollment_id: enrollment.id,
          student_id: enrollment.student_id,
          course_id: enrollment.course_id,
          course_name: course.name,
          cohort: enrollment.cohort,
          student_name: enrollment.student.name
        }
      end
    }
  end

  return { courses: courses, enrollments: course_enrollments }
 end
end


# { enrollment_id, student_id, course_id, course_name, cohort, student_name}

