Rails.application.routes.draw do
  
  devise_for :users
  root 'papers#index'

  resources :papers do
    resources :comments
    resources :reviews
  end

  resources :surveys
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
