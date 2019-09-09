class Api::SessionsController < ApplicationController
  
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ['Nope, wrong credentials'], status: 422
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