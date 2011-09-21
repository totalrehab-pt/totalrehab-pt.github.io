set :application, "totalrehab-pt.com"
set :scm, :none

role :web, "ftp.codecrate.com"

namespace :deploy do
  task :default do
    `staticmatic build .`
    upload "site", "/totalrehab-pt", :via=> :sftp, :recursive => true
  end
end
