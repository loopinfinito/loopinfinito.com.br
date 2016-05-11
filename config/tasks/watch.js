module.exports = grunt => {
  grunt.config('watch', {
    templates: {
      files: ['src/templates/**/*.html', 'src/content/**/*.yaml'],
      tasks: 'generate'
    }
  });
};
