class Api::BenchesController < ApplicationController
  
  def index
    @benches = Bench.all
    render json: @benches
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render json: ["successfully created bench"]
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:body, :lat, :lng)
  end
end