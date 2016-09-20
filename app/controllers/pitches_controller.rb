class PitchesController < ApplicationController
  def create
    @pitch = Pitch.new(pitch_params)
    @pitch.author = current_user
    if pitch.save
      render :json => @pitch.as_json
    else
    end
  end

  private
  def pitch_params
    params.require(:pitch).permit(:title, :description)
  end
end
