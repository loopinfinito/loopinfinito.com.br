module.exports = grunt => {
  grunt.registerTask('generate', 'shell:generate');
  grunt.registerTask('run', ['generate', 'connect']);
  grunt.registerTask('help', 'availabletasks');
  grunt.registerTask('default', 'help');
};
