class PhotosController < ApplicationController
  def index
    @photos = Photo.all
    @photo = Photo.new
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render json: @photo
    else
      render json: @photo.errors
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render json: @photo
  end

  private
  def photo_params
    params.require(:photo).permit(:image_url, :title, :user_name)
  end
end
