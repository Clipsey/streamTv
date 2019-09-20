class CategoriesController < ApplicationController
  def show
    category = Category.find_by(title: params[:id])
    users = category.users

    info_data = {title: category.title, picture: url_for(category.photo)}
    users.each do |user|
      to_send = {
        username: user.username,
        id: user.id,
        stream_key: user.stream_key,
        stream_title: user.stream_title,
        stream_category: user.stream_category,
        picture: url_for(user.photo)
      }
      info_data[user.id] = to_send
    end
        
    render json: info_data
  end

  def index
    info_data = {}
    categories = Category.all.includes(:users)
    categories.each do |category|
      users = category.users
      info_data[category.title] = {}
      users.each do |user|
        to_send = {
          username: user.username,
          id: user.id,
          stream_key: user.stream_key,
          stream_title: user.stream_title,
          stream_category: user.stream_category,
          picture: url_for(user.photo)
        }
        info_data[category.title][user.id] = to_send
        info_data[category.title]['picture'] = url_for(category.photo)
      end
    end
    render json: info_data
  end


end
