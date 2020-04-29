
class PostsController < ApplicationController
    def index
      @post = Post.all
      render json: @post
    end
  
    def create
      @post = Post.create(name: params[:name], neko_type: params[:neko_type])
      render json: @post
    end
  
  end
  