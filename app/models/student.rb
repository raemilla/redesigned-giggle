class Student < User
  has_many :pitches, foreign_key: 'author_id'
  has_many :team_members
  has_one :team, through: :team_members, class_name: 'Pitch'
  has_many :votes
  has_many :preferences
end
