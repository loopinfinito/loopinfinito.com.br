module.exports = grunt => {
  grunt.config('availabletasks', {
    workflows: {
      options: {
        showTasks: 'user',
        filter: 'exclude',
        tasks: ['default'],
        sort: ['generate', 'help'],
        descriptions: {
          generate: 'Generates contents to /build.',
          help: 'Prints the available workflows.'
        }
      }
    }
  });
};
