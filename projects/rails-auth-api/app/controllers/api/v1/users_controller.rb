module Api
  module V1
    class UsersController < ApplicationController
      def profile
        render json: {
          user:  current_user,
          stats: {
            total_posts:     current_user.posts.count,
            published_posts: current_user.posts.published.count,
            member_since:    current_user.created_at.strftime("%B %Y")
          }
        }
      end
    end
  end
end
