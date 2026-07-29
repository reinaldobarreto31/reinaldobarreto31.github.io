module Api
  module V1
    module Auth
      class SessionsController < Devise::SessionsController
        respond_to :json

        private

        def respond_with(resource, _opts = {})
          render json: {
            message: "Logged in successfully",
            user:    resource.as_json.merge(token: current_token)
          }, status: :ok
        end

        def respond_to_on_destroy
          render json: { message: "Logged out successfully" }, status: :ok
        end

        def current_token
          request.env["warden-jwt_auth.token"]
        end
      end
    end
  end
end
