class TeamMember < ApplicationRecord
  belongs_to :pitch
  belongs_to :student
end
