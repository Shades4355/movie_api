class Movie < ApplicationRecord
  validates :display_title, presence: true
  validates :headline, presence: true
  validates :publication_date, presence: true, numericality: true
  validates :upvotes, presence: true, numericality: true
  validates :downvotes, presence: true, numericality: true
end
