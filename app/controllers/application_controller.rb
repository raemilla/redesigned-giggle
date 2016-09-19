class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  include SessionHelper

  def render_dashboard
    case ENV["phase"]
    when "pre"
      render (admin? ? "blah blah" : "blah blah student")
    when "0"
      render (admin? ? "blah blah pitches" : "blah blah student pitches")
    when "1"
      render (admin? ? "blah blah round 1 voting" : "blah blah round 2 voting")
    when "2"
      render (admin? ? "blah blah round 2 voting" : "blah blah")
    when "3"
      render (admin? ? "blah blah team display" : "blah blah")
    end
  end
  
end
