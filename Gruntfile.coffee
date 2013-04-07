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
			build:
				src: '_source'
				dest: 'site'
	)

	grunt.registerTask('run', ['jekyll:dev'])
	grunt.registerTask('build', ['jekyll:build'])
	grunt.registerTask('deploy', ['jekyll:build', 'minify', 'rsync'])
	grunt.registerTask('deploy:staging', ['jekyll:build', 'minify', 'rsync:staging'])
