Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope 'api/pads' , :controller => 'pads' do
    get "/" , :action=> 'index', :as => 'pads_dashboard'
    get '/:pad_id' ,:action => 'show_pad' , :as => 'show_pad'
  end

  mount_ember_app :frontend, to: "/"
end
