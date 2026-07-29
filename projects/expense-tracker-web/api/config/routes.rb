Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :expenses
      get "summary", to: "expenses#summary"
    end
  end
  get "/healthz", to: proc { [200, {}, [{ status: "ok" }.to_json]] }
end
