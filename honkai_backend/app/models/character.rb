class Character < ApplicationRecord
  validates :name, presence: true
  validates :level, numericality: { greater_than_or_equal_to: 1 }

end
