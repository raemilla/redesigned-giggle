class VotesController < ApplicationController
  def create
    params[:votes].each do |title|
      pitch = Pitch.find_by(title: title)
      if pitch
        pitch.votes.create(user: current_user)
      end
    end
  end
end
