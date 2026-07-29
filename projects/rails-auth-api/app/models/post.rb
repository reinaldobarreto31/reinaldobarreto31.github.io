class Post < ApplicationRecord
  belongs_to :user

  validates :title,   presence: true, length: { maximum: 255 }
  validates :content, presence: true

  scope :recent,    -> { order(created_at: :desc) }
  scope :published, -> { where(published: true) }
end
