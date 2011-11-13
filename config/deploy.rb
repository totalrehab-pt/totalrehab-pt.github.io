set :application, "totalrehab-pt.com"
set :scm, :none
set :user, 'wireframe'

role :web, "ftp.codecrate.com"

namespace :deploy do
  task :default do
    `staticmatic build .`
    top.upload "site", "/totalrehab-pt", :via=> :sftp, :recursive => true
  end
end
