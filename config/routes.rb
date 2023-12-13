Rails.application.routes.draw do
  # get 'greetings/api'

  namespace :api do
    get 'random_greeting', to: 'greetings#random_greeting'
  end

end
