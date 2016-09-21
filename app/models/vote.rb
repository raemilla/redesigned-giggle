class Vote < ApplicationRecord
  belongs_to :pitch
  belongs_to :student

  validates :student_id, uniqueness: { scope: :pitch_id }
  validate :limit_votes_per_student

  def limit_votes_per_student
    if self.student.votes.count > ENV["size_of_pitch_subset"].to_i
      self.errors.add(:student, "You have already submitted the maximum number of votes")
    end
  end
end
