class PreferencesController < ApplicationController
  def create
    prefs = params.require(:prefs).permit('1', '2', '3')
    prefs.each do |ranknum, pitch_id|
      pitch = Pitch.find_by(id: pitch_id)
      if pitch
        pitch.preferences.create(student: current_student, rank: ranknum)
      end
    end
  end

  def index
    @pitches= Pitch.pass_hash(Pitch.all)
    @students= Student.pass_hash
  end
end
