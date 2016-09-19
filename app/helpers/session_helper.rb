module SessionHelper
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def login?
    !!current_user
  end

  def require_user
    redirect_to login_path unless login?
  end

  def admin?
    login? && current_user.is_a?(Admin)
  end

  def require_admin
    redirect_to root_path unless admin?
  end
end
