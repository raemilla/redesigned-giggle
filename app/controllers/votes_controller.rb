class VotesController < ApplicationController
  def create
    params[:votes].each do |title|
      pitch = Pitch.find_by(title: title)
      if pitch
        pitch.votes.create(student: current_student)
      end
    end
  end
end
