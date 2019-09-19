class Api::SessionsController < ApplicationController
  
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user === "Can't find that Username." || @user === "That Password was incorrect."
      render json: { errors: @user }, status: 422
    else
      login!(@user)
      # render 'api/users/show'
      to_send = {
          username: @user.username,
          id: @user.id,
          stream_key: @user.stream_key,
          stream_title: @user.stream_title,
          stream_category: @user.stream_category,
          picture: url_for(@user.photo)
        }
      render json: to_send
    end
  end
  
  def destroy
    if current_user
      logout!
      render :destroy
    else
      raise ActionController::RoutingError.new('Not Found')
    end
  end


end