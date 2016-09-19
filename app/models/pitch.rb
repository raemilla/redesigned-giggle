class Pitch < ApplicationRecord
  belongs_to :author, class_name: 'Student'
  has_many :team_members
  has_many :students, through: :team_members
  has_many :votes
  has_many :preferences
end
