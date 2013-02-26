module.exports = function(grunt) {
	grunt.loadTasks('./_source/_tasks/')

	grunt.registerTask('deploy', ['minify', 'rsync'])
	grunt.registerTask('deploy:staging', ['minify', 'rsync:staging'])
}
