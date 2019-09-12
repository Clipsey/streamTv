class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.stream_key = SecureRandom::hex(20)
    date_string = params[:user][:day] + '-' + params[:user][:month] + '-' + params[:user][:year]
    @user.dob = date_string.to_date

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
