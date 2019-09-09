class Api::BenchesController < ApplicationController
  def index
    @benches = Api::Bench.all
    render :index
  end

  def create
    @bench = Api::Bench.new(bench_params)
    if @bench.save
      render :show
    else
      flash[:errors] = @bench.errors.full_messages
      render json: flash[:errors], status: 422
    end
  end

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
