class PhotosController < ApplicationController
  def index
    @photos = Photo.all
    @photo = Photo.new
  end
end
