json.array! @students do |student|
  json.full_name student["student"].full_name
  json.preferences student["preferences"]
end
