class GreetingsController < ApplicationController
  def api
    render json: { greeting: Message.order('RANDOM()').first.content }
  end
end
