class ShortLink < ApplicationRecord
  before_create :generate_code

  validates :original_url, presence: true, format: { with: URI::DEFAULT_PARSER.make_regexp(%w[http https]) }
  validates :code, uniqueness: true

  def increment_clicks!
    increment!(:clicks)
  end

  private

  def generate_code
    loop do
      self.code = SecureRandom.alphanumeric(6).downcase
      break unless ShortLink.exists?(code: code)
    end
  end
end
