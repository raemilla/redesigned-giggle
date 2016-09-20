class SessionsController < ApplicationController
  def new
    @user = Student.new
  end

  def create
    user = Student.find_by_email(params[:user][:email])
    if user.authenticate(params[:user][:password])
      session[:user_id] = user.id
      redirect_to '/'
    else
      @errors = user.errors
    end
  end

  def destroy
    session.clear
    redirect_to '/'
  end
end
