module.exports = grunt => {
  grunt.config('watch', {
    templates: {
      files: 'src/templates/**/*.html',
      tasks: 'generate'
    }
  });
};
