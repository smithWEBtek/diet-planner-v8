Rails.application.routes.draw do
 
  devise_for :users
  resources :users
  get '/', to: 'static#home'
end
