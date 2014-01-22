module.exports = (grunt) ->
	grunt.loadTasks '_tasks/'
	grunt.loadNpmTasks 'grunt-jekyll'
	grunt.loadNpmTasks 'grunt-concurrent'
	grunt.loadNpmTasks 'grunt-contrib-less'
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-contrib-connect'

	grunt.initConfig(
		jekyll:
			build:
				src: '_source'
				dest: 'site'
				future: true
				exclude: './_source/styles/'
		connect:
			server:
				options:
					port: 4000
					keepalive: true
					base: 'site'
					hostname: '*'
		less:
			default:
				options:
					paths: ['_source/styles/']
				files:
					'site/styles/blog.css': '_source/styles/blog.less'
		watch:
			jekyll:
				files: ['_source/**/*', '!_source/styles/*.less']
				tasks: ['build']
			less:
				files: ['_source/styles/*.less']
				tasks: ['less']
		concurrent:
			dev:
				tasks: ['connect', 'watch:jekyll', 'watch:less']
				options:
					logConcurrentOutput: true
	)

	grunt.registerTask('default', ['concurrent:dev'])
	grunt.registerTask('run', ['concurrent:dev'])
	grunt.registerTask('build', ['jekyll:build', 'less', 'fix_permissions', 'remove_cdata'])
	grunt.registerTask('deploy', ['jekyll:build', 'less', 'fix_permissions', 'remove_cdata', 'minify', 'rsync'])
	grunt.registerTask('deploy:staging', ['jekyll:build', 'less', 'fix_permissions', 'remove_cdata', 'minify', 'rsync:staging'])
