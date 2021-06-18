class Api::CoursesController < ApplicationController
  def index
    render json: Course.all_with_enrollments_and_students
  end
end
