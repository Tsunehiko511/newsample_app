class PublicController < ApplicationController
	  def index
	  	@users = User.paginate(page: params[:page])
	  end
end