Rails.application.routes.draw do
 
  resources :diets
  devise_for :users
  resources :users
  get '/', to: 'static#home'

  get '/api_users', to: 'admin#api_users'


end
