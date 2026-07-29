module Api
  module V1
    class PostsController < ApplicationController
      before_action :set_post, only: %i[show update destroy]
      before_action :authorize_owner!, only: %i[update destroy]

      # GET /api/v1/posts
      def index
        @posts = Post.recent.includes(:user)
        render json: @posts.as_json(include: { user: { only: %i[id name] } })
      end

      # GET /api/v1/posts/:id
      def show
        render json: @post.as_json(include: { user: { only: %i[id name] } })
      end

      # POST /api/v1/posts
      def create
        @post = current_user.posts.create!(post_params)
        render json: @post, status: :created
      end

      # PUT /api/v1/posts/:id
      def update
        @post.update!(post_params)
        render json: @post
      end

      # DELETE /api/v1/posts/:id
      def destroy
        @post.destroy!
        head :no_content
      end

      private

      def set_post
        @post = Post.find(params[:id])
      end

      def authorize_owner!
        return if @post.user == current_user

        render json: { error: "Forbidden" }, status: :forbidden
      end

      def post_params
        params.require(:post).permit(:title, :content, :published)
      end
    end
  end
end
