class Movie < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :upvotes, numericality: true
  validates :downvotes, numericality: true
end
