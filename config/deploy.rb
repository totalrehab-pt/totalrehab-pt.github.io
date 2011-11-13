set :application, "totalrehab-pt.com"
set :scm, :none
set :user, 'wireframe'

role :web, "ftp.codecrate.com"

namespace :deploy do
  task :default do
    puts 'rebuilding site...'
    `staticmatic build .`
    # path: /home/content/w/i/r/wireframe/html/totalrehab-pt
    top.upload "site", "/home/content/w/i/r/wireframe/html/totalrehab-pt", :via=> :scp, :recursive => true
  end
end
