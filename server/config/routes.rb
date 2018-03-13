Rails.application.routes.draw do
  resources :users
  get 'isLoggedIn', to: 'users#is_logged_in'
  post 'users/login', to: 'users#login'

  resources :prescriptions, only: [:show, :update, :destroy]
  get 'prescriptions/:uid', to: 'prescriptions#index', as: 'prescriptions'
  post 'prescriptions/:uid', to: 'prescriptions#create'
end
