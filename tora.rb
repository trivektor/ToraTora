require 'sinatra'
require 'sinatra/static_assets'
require 'haml'
require 'json'
require 'httpclient'
require 'forwardable'
require 'pusher'

set :root, File.dirname(__FILE__)

#enable :sessions
use Rack::Session::Pool, :expire_after => 2592000

Pusher.app_id = '14285'
Pusher.key = '56d793f117cc69e4bc41'
Pusher.secret = 'b9685725395cd08ab15c'

get "/" do
  haml :index
end

post "/chat" do
  Pusher['tora-channel'].trigger('respond', params[:text])
end

post "/rooms" do
  channel = Pusher::Channel.new(URI("http://localhost:9393"), params[:name])
  {success: 1, channel: channel.name}.to_json
end

get "/rooms/:id" do
  session[:room] = params[:id]
  haml :"rooms/show"
end