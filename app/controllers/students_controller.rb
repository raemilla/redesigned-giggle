class StudentsController < ApplicationController
  def new
    @student = Student.new
  end

  def create
    @student = Student.new(student_params)
    if @student.save
      session[:user_id] = @student.id
      redirect_to root_path
    else
      @errors = @user.errors.full_messages
      render "new"
    end
  end

  private
  def student_params
    params.require(:student).permit(:full_name, :email, :password)
  end
end
