Rails.application.routes.draw do
  resources :users
  get 'isLoggedIn', to: 'users#is_logged_in'
  post 'users/login', to: 'users#login'

  resources :prescriptions, only: [:index, :create, :show, :update, :destroy]
end
