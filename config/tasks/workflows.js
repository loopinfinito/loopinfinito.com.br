module.exports = grunt => {
  grunt.registerTask('help', 'availabletasks');
  grunt.registerTask('default', 'help');
};
