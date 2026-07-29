class Task < ApplicationRecord
  PRIORITIES = %w[low medium high].freeze

  validates :title, presence: true, length: { maximum: 255 }
  validates :priority, inclusion: { in: PRIORITIES }, allow_nil: true

  scope :done, -> { where(done: true) }
  scope :pending, -> { where(done: false) }
  scope :by_priority, ->(p) { where(priority: p) }
end
