module.exports = grunt => {
  grunt.config('availabletasks', {
    workflows: {
      options: {
        showTasks: 'user',
        filter: 'exclude',
        tasks: ['default'],
        sort: ['run', 'generate', 'help'],
        descriptions: {
          run: 'Builds to /build and runs server at localhost:8888',
          generate: 'Generates contents to /build.',
          help: 'Prints the available workflows.'
        }
      }
    }
  });
};
