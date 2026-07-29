Rails.application.routes.draw do
  devise_for :users,
             path: "api/v1/auth",
             path_names: { sign_in: "login", sign_out: "logout", registration: "signup" },
             controllers: {
               sessions:      "api/v1/auth/sessions",
               registrations: "api/v1/auth/registrations"
             }

  namespace :api do
    namespace :v1 do
      get  "profile", to: "users#profile"
      resources :posts
    end
  end

  get "/healthz", to: proc { [200, {}, [{ status: "ok" }.to_json]] }
end
