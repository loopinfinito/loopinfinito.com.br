module.exports = (grunt) ->
	grunt.loadTasks '_tasks/'
	grunt.loadNpmTasks 'grunt-jekyll'

	grunt.initConfig(
		jekyll:
			dev:
				src: '_source'
				dest: 'site'
				server: true
				server_port: 4000
				auto: true
				future: true
			build:
				src: '_source'
				dest: 'site'
				future: true
	)

	grunt.registerTask('run', ['jekyll:dev'])
	grunt.registerTask('build', ['jekyll:build', 'fix_permissions'])
	grunt.registerTask('deploy', ['jekyll:build', 'fix_permissions', 'minify', 'rsync'])
	grunt.registerTask('deploy:staging', ['jekyll:build', 'fix_permissions', 'minify', 'rsync:staging'])
