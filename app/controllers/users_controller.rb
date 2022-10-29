class UsersController < ApplicationController
  wrap_parameters format: []
  
  skip_before_action :authorized, only: [:create]

  def show
    current_user = User.find(session[:user_id])
    render json: current_user
  end

  def create
    user = User.create!(user_params)
    render json: user
  end

  def index
    users = User.all
    render json: users
  end



  private



  def user_params
    params.permit(:name, :username, :password)
  end

end
