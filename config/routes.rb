Rails.application.routes.draw do
 
  devise_for :users
  resources :users, :diets
  get '/', to: 'static#home'

  get '/api_diets', to: 'admin#api_diets'
  get '/api_users', to: 'admin#api_users'
end
