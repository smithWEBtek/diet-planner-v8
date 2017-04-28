Rails.application.routes.draw do
 
  resources :users
  get '/', to: 'static#home'
end
