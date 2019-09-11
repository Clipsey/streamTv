class Api::SessionsController < ApplicationController
  
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user === "Can't find that Username." || @user === "That Password was incorrect."
      render json: { errors: @user }, status: 422
    else
      login!(@user)
      render 'api/users/show'
    end
  end
  
  def destroy
    # debugger
    if current_user
      logout!
      render :destroy
    else
      raise ActionController::RoutingError.new('Not Found')
    end
  end


end