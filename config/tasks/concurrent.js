module.exports = grunt => {
  grunt.config('concurrent', {
    run: {
      tasks: ['shell:watch', 'connect'],
      options: {
        logConcurrentOutput: true
      }
    }
  });
};
