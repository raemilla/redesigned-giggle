class PagesController < ApplicationController
  def home
  end

  def create
    ENV["phase"] = "0"
    ENV["pitches_per_student"] = params[:number_pitches]
    ENV["number_of_teams"] = params[:number_teams]
    ENV["size_of_pitch_subset"] = params[:size_of_pitch_subset]
    redirect_to root_path
  end
end
