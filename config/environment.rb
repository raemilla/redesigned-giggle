# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!
Rails.application.config.before_initialize do
  ENV["phase"] ||= "pre"
  ENV["pitches_per_student"] ||= "3"
  ENV["number_of_teams"] ||= "4"
  ENV["size_of_pitch_subset"] ||= "7"
end
