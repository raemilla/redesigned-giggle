class PitchesController < ApplicationController
  def new
    puts "placeholder for errors"
  end

  def create
    @user = current_user
    pitch = @user.pitches.build(pitch_params)

    if pitch.save
      redirect_to root_path
    else
      @errors = pitch.errors.full_messages
      render 'new'
    end
  end

  private
  def pitch_params
    params.require(:pitch).permit(:title, :description)
  end
end
