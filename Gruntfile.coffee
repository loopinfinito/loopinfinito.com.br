module.exports = (grunt) ->
	grunt.loadTasks '_tasks/'
	grunt.loadNpmTasks 'grunt-jekyll'
	grunt.loadNpmTasks 'grunt-concurrent'
	grunt.loadNpmTasks 'grunt-contrib-watch'

	grunt.initConfig(
		jekyll:
			build:
				src: '_source'
				dest: 'site'
				future: true
			server:
				src: '_source'
				dest: 'site'
				future: true
				server: true
		watch:
			jekyll:
				files: ['_source/**/*']
				tasks: ['jekyll:build']
		concurrent:
			dev:
				tasks: ['jekyll:server', 'watch:jekyll']
				options:
					logConcurrentOutput: true
	)

	grunt.registerTask('default', ['concurrent:dev'])
	grunt.registerTask('run', ['concurrent:dev'])
	grunt.registerTask('build', ['jekyll:build', 'fix_permissions'])
	grunt.registerTask('deploy', ['jekyll:build', 'fix_permissions', 'minify', 'rsync'])
	grunt.registerTask('deploy:staging', ['jekyll:build', 'fix_permissions', 'minify', 'rsync:staging'])
