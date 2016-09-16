
require 'sinatra/base'

class Thermostat < Sinatra::Base

set :public_folder, File.dirname(__FILE__)+'/src'
  get '/' do
    erb :'index'

  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
