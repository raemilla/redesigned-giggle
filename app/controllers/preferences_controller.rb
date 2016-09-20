class PreferencesController < ApplicationController
  def create
    prefs = params.permit(prefs: []).require(:prefs)
    3.times do |i|
      pitch = Pitch.find_by(:title, prefs[i])
      if pitch
        pitch.preferences.create(user: current_user, rank: i+1)
      end
    end
  end
end
