class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      flash[:errors] = @user.errors.full_messages
      render json: flash[:errors], status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
