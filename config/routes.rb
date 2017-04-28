Rails.application.routes.draw do
 
  resources :diets
  devise_for :users
  resources :users
  get '/', to: 'static#home'
end
