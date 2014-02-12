module.exports = (grunt) ->
	grunt.registerTask 'minify', 'Minify nos arquivos HTML, CSS e JS', ->
		sh = require 'execSync'

		grunt.log.ok 'Minificando HTML ...'
		code = sh.run 'java -jar _tools/htmlcompressor-1.5.2.jar --compress-css --compress-js --remove-intertag-spaces -r -o site site'
		grunt.log.error 'Erro no minify de HTML' if code != 0

		grunt.log.ok 'Minificando CSS ...'
		code = sh.run 'java -jar _tools/yuicompressor-2.4.7.jar -o ./site/styles/*.css ./site/styles/*.css'
		grunt.log.error 'Erro no minify de CSS' if code != 0

		grunt.log.ok 'Minificando JS ...'
		code = sh.run 'java -jar _tools/yuicompressor-2.4.7.jar -o ./site/scripts/*.js ./site/scripts/*.js'
		grunt.log.error 'Erro no minify de JS' if code != 0
