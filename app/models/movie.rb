class Movie < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :upvotes, numericality: true
  validated :downvotes, numericality: true
end
