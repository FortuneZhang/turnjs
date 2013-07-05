class TurnController < ApplicationController
  skip_before_filter :verify_authenticity_token, :only => [:turn_post]


  def index

  end

  def index2

  end

  def turn_post

    puts params
    pic_name = params["page"]

    pic_url ="background-image:url('assets/"+ pic_name  +".jpg'); "

    respond_to do |format|

      format.json { render json:{'save_status' => "yes", "command" => "none","pic_uri"=> pic_url } }
    end


  end

end
