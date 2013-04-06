module.exports = function(grunt) {
	grunt.loadTasks('_tasks/')
	grunt.loadNpmTasks('grunt-jekyll')

	grunt.initConfig({
		jekyll: {
			dev: {
				src: '_source',
				dest: 'site',
				server: true,
				server_port: 4000,
				auto: true,
				baseurl: '/',
				paginate: 5,
				url: 'http://loopinfinito.com.br',
				future: true,
				pygments: true,
				permalink: 'pretty'
			},
			build: {
				src: '_source',
				dest: 'site',
				baseurl: '/',
				paginate: 5,
				url: 'http://loopinfinito.com.br',
				future: true,
				pygments: true,
				permalink: 'pretty'
			}
		}
	})

	grunt.registerTask('run', ['jekyll:dev'])
	grunt.registerTask('build', ['jekyll:build'])
	grunt.registerTask('deploy', ['jekyll:build', 'minify', 'rsync'])
	grunt.registerTask('deploy:staging', ['jekyll:build', 'minify', 'rsync:staging'])
}
