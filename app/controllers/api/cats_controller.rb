class Api::CatsController < ApplicationController
  before_action :authenticate_user!, except: [:demo]

  # where I don't need auth
  def demo
     render json: Cat.all
  end
  
   # where I do need auth
  def index
    render json: User.random_cat(current_user.liked_cats)
    current_user.posts.create(title:'yo')
    # user = User.first
    # render json: User.random_cat(user.liked_cats)
  end

  def update
    current_user.liked_cats << params[:id].to_i
    current_user.save
  end

  def my_cats
      render json: User.liked(current_user.liked_cats)
  end

end
