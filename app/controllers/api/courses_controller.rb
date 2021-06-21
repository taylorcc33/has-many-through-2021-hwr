class Api::CoursesController < ApplicationController
  def index
    render json: Course.all_with_enrollemnts_and_students
  end
end
