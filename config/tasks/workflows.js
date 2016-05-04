module.exports = grunt => {
  grunt.registerTask('generate', 'shell:generate');
  grunt.registerTask('run', 'concurrent:run');
  grunt.registerTask('dev', 'concurrent:dev');
  grunt.registerTask('help', 'availabletasks');
  grunt.registerTask('default', 'help');
};
