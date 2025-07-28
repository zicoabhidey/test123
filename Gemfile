source "https://rubygems.org"

# Jekyll version
gem "jekyll", "~> 4.3.0"

# Default theme for new Jekyll sites
gem "minima", "~> 2.5"

# Required for Ruby 3.4+ compatibility
gem "csv"
gem "logger"
gem "ostruct"
gem "base64"

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Platform-specific gems
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

platforms :windows do
  gem "wdm", "~> 0.1.1"
end

platforms :jruby do
  gem "http_parser.rb", "~> 0.6.0"
end