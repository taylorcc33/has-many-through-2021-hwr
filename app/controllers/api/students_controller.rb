class Api::StudentsController < ApplicationController
  def index
    render json: Student.all
  end
end
