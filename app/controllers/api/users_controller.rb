class Api::UsersController < ApplicationController

  def index 
    
  end
  
  def create
    require 'open-uri'
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

    @user.stream_title = "Super Special Awesome Default Title"
    @user.stream_category = "None"
    file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/27103734-3cda-44d6-a384-f2ab71e4bb85-profile_image-70x70.jpg')
    @user.photo.attach(io: file, filename: '27103734-3cda-44d6-a384-f2ab71e4bb85-profile_image-70x70.jpg')
    # @user.

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
    if (params[:id_get]) 
      @user = User.find_by(id: params[:id])
      if @user
        to_send = {
          username: @user.username,
          id: @user.id,
          stream_key: @user.stream_key,
          stream_title: @user.stream_title,
          stream_category: @user.stream_category,
          picture: url_for(@user.photo)
        }

        render json: to_send
      else
        render json: { errors: "No User Found" }, status: 422
      end
    else
      @user = User.find_by(username: params[:id])
      if @user
        to_send = {
          username: @user.username,
          id: @user.id,
          stream_key: @user.stream_key,
          stream_title: @user.stream_title,
          stream_category: @user.stream_category,
          picture: url_for(@user.photo)
        }
        
        render json: to_send
      else
        render json: { errors: "No User Found" }, status: 422
      end
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
