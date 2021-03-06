Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :movies, only: [:index, :show, :update, :create]
    end
  end

end
