source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll"

# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "jekyll-theme-kagami"
gem 'kramdown-parser-gfm'
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
gem 'jekyll-figure'
gem 'jekyll-sitemap'

gem 'concurrent-ruby', '~> 1.1.10'

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
  gem 'jekyll-seo-tag'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0", :install_if => Gem.win_platform?
gem 'kramdown', '>= 2.3.0'
gem 'public_suffix', '~> 4.0.5'
gem 'ffi', '>= 1.17.0'
gem 'addressable', '~> 2.8.0'
gem 'rexml', '~> 3.2.5'
