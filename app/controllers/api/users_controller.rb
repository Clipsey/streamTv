class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.stream_key = SecureRandom::hex(20)
    date = [params[:user][:day], params[:user][:month], params[:user][:year]]
    months = {
      'January' => 1,
      'Febrary' => 2,
      'Match' => 3,
      'April' =>  4,
      'May' => 5,
      'June' => 6,
      'July' => 7,
      'August' => 8,
      'September' => 9,
      'October' => 10,
      'November' => 11,
      'December' => 12,
    }
    if Date.valid_date? date[2].to_i, months[date[1]].to_i, date[0].to_i
      @user.dob = date.join('-').to_date
    else 
      render json: { errors: "That's not your birthday." }, status: 422
      return
    end

    if @user.save
      login!(@user)
      render :show
    else
      flash[:errors] = @user.errors.full_messages
      render json: { errors: flash[:errors] }, status: 422
      return
    end
  end

  def show 
    # debugger
    @user = User.find_by(username: params[:id])
    if @user
      render :show
    else
      render json: { errors: @user }, status: 422
      render json: { errors: "No User Found" }, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
