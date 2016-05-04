module.exports = grunt => {
  grunt.config('concurrent', {
    run: {
      tasks: ['connect', 'shell:watch'],
      options: {
        logConcurrentOutput: true
      }
    },

    dev: {
      tasks: ['connect', 'shell:watch', 'watch:templates'],
      options: {
        logConcurrentOutput: true
      }
    }
  });
};
