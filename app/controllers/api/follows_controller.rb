class Api::FollowsController < ApplicationController
  def show
    debugger
    id = params[:id]
    follow = params[:user][:follower] ? 'follower' : 'followee'

    if follow == 'followee'
      # All followers of the user
      @follows = Follow.where(followee_id: params[:followee_id])
    else
      # Find 
      @follows = Follow.where(follower_id: params[:follower_id])
    end

  end

  def create
    @follow = Follow.new(follow_params)
    @follow.save
  end

  def destroy
    params = follow_params
    @follow = Follow
                .where(followee_id: params[:followee_id])
                .where(follower_id: params[:follower_id])
    debugger
  end 

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
