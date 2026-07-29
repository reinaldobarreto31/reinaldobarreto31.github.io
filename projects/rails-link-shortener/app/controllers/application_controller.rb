class ApplicationController < ActionController::Base
  # Respond to both HTML and JSON
  before_action :set_json_format_if_requested

  private

  def set_json_format_if_requested
    request.format = :json if request.headers['Accept']&.include?('application/json') && !request.format.json?
  end
end
