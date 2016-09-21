class PagesController < ApplicationController
  def home
    require_user
    @pitches = Pitch.all.as_json(include: {author: {only: :full_name}, votes: {}},methods: :preference_rank)
    @students = Student.all.as_json(include: {pitches: {}, votes: {}}, methods: :preference_count)
  end

  def create
    ENV["phase"] = "0"
    ENV["pitches_per_student"] = params[:number_pitches]
    ENV["number_of_teams"] = params[:number_teams]
    ENV["size_of_pitch_subset"] = params[:number_top_pitches]
    redirect_to root_path
  end

  def continue
    new_phase_integer = ENV["phase"].to_i + 1
    new_phase_string = new_phase_integer.to_s
    ENV["phase"] = new_phase_string
    redirect_to root_path
  end

  def reset
    Pitch.destroy_all
    Student.destroy_all
    Preference.destroy_all
    Vote.destroy_all
    TeamMember.destroy_all
    ENV["phase"] = "pre"
    redirect_to root_path
  end

  def round_two
    params[:pitch].each do |pitch_id|
      pitch = Pitch.find_by(id: pitch_id)
      pitch.round2 = true
      pitch.save
    end
    # redirect_to root_path
  end

end
