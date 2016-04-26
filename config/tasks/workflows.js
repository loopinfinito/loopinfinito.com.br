module.exports = grunt => {
  grunt.registerTask('generate', 'shell:generate');
  grunt.registerTask('help', 'availabletasks');
  grunt.registerTask('default', 'help');
};
