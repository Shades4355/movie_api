class Movie < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :director, presence: true
  validates :release_year, presence: true, numericality: true
  validates :upvotes, presence: true
  validates :downvotes, presence: true
end
