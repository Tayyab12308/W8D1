class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render json: [ "User has been signed in" ]
    else
      render json: [ "Invalid credentials" ], status: 422
    end
  end

  def destroy
    if logged_in?
      logout!
      render json: {}
    else
      debugger
      render json: ["No user logged in" ], status: 422
    end
  end
end