# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160919184958) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pitches", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.boolean  "round2"
    t.integer  "author_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["author_id"], name: "index_pitches_on_author_id", using: :btree
  end

  create_table "preferences", force: :cascade do |t|
    t.integer  "pitch_id"
    t.integer  "student_id"
    t.integer  "rank"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pitch_id"], name: "index_preferences_on_pitch_id", using: :btree
    t.index ["student_id"], name: "index_preferences_on_student_id", using: :btree
  end

  create_table "team_members", force: :cascade do |t|
    t.integer  "pitch_id"
    t.integer  "student_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pitch_id"], name: "index_team_members_on_pitch_id", using: :btree
    t.index ["student_id"], name: "index_team_members_on_student_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "full_name"
    t.string   "type"
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "votes", force: :cascade do |t|
    t.integer  "pitch_id"
    t.integer  "student_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pitch_id"], name: "index_votes_on_pitch_id", using: :btree
    t.index ["student_id"], name: "index_votes_on_student_id", using: :btree
  end

end
