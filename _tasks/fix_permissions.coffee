module.exports = (grunt) ->
	grunt.registerTask('fix_permissions', 'Corrige permissão dos arquivos antes do deploy', () ->
		exec = require('child_process').exec

		exec 'chmod -R 0755 site'
	)
