Rails.application.routes.draw do
  resources :rentable_users
  resources :users
  resources :rentables
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
