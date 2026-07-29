class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable, :registerable,
         :recoverable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  has_many :posts, dependent: :destroy

  validates :name, presence: true, length: { minimum: 2, maximum: 100 }

  def as_json(*)
    super.except("encrypted_password", "reset_password_token",
                  "reset_password_sent_at", "jti")
  end
end
