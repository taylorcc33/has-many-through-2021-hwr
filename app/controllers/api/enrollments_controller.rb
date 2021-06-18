class Api::EnrollmentsController < ApplicationController
  def index
    render json: Enrollment.all_with_student_name
  end
end
