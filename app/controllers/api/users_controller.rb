class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.stream_key = SecureRandom::hex(20)

    if @user.save
      login!(@user)
      render :show
    else
      flash[:errors] = @user.errors.full_messages
      render json: { errors: flash[:errors] }, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
