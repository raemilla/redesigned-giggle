# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!
Rails.application.config.before_initialize do
  ENV["phase"] ||= "pre"
  ENV["pitches_per_student"] ||= "3"
end
