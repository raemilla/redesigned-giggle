class Pitch < ApplicationRecord
  belongs_to :author, class_name: 'Student'
  has_many :team_members
  has_many :students, through: :team_members
  has_many :votes
  has_many :preferences

  validate :limit_pitches_per_student

  def limit_pitches_per_student
    if self.author.pitches.count > ENV["pitches_per_student"].to_i
      self.errors.add(:author, "You have already submitted the maximum number of pitches")
    end
  end
end
