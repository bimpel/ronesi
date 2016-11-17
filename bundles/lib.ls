
#global.use  = require '../use.ls'
require 'app-module-path' .addPath __dirname + '/..'

lib = 
  meta:      require 'meta.ls' # use 'meta'
  path_dist: (require 'path' .resolve __dirname + '/..', 'dist')
  path_src:  (require 'path' .resolve __dirname + '/..', 'src')

module.exports = lib
