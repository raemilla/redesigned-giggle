class Vote < ApplicationRecord
  belongs_to :pitch
  belongs_to :student

  validates :student_id, uniqueness: { scope: :pitch_id }
end
