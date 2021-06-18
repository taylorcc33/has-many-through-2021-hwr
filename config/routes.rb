Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    get '/things', to:'things#index'
    resources :cats, only: [:index, :update]
    get '/demo', to: "cats#demo"
    get '/my_cats', to: "cats#my_cats"
    resources :students
    resources :courses
    resources :enrollments
  end 
end
