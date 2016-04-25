module.exports = grunt => {
  grunt.config('availabletasks', {
    workflows: {
      options: {
        showTasks: 'user',
        filter: 'exclude',
        tasks: ['default'],
        sort: ['help'],
        descriptions: {
          help: 'Prints the available workflows.'
        }
      }
    }
  });
};
