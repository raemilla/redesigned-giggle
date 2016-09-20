class Student < User
  has_many :pitches, foreign_key: 'author_id'
  has_many :team_members
  has_one :team, through: :team_members, class_name: 'Pitch'
  has_many :votes
  has_many :preferences

  def preference_count
    {
      1 => self.preferences.find{|pref| pref.rank == 1}.pitch.title,
      2 => self.preferences.find{|pref| pref.rank == 2}.pitch.title,
      3 => self.preferences.find{|pref| pref.rank == 3}.pitch.title
    }
  end

  def self.pass_hash
    preferences= []
    self.all.each do |student|
      preferences << {"student" => student, "preferences" => student.preference_count }
    end
    preferences
  end
end
