class Movie < ApplicationRecord
  validates :display_title, presence: true
  validates :headline, presence: true
  validates :publication_date, presence: true
  validates :upvotes, numericality: true
  validates :downvotes, numericality: true
end
