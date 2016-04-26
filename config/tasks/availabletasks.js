module.exports = grunt => {
  grunt.config('availabletasks', {
    workflows: {
      options: {
        showTasks: 'user',
        filter: 'exclude',
        tasks: ['default'],
        sort: ['run', 'generate', 'help'],
        descriptions: {
          run: 'Builds to /<%= cfg.buildDir %> and runs server at localhost:<%= cfg.serverPort %>',
          generate: 'Generates contents to /<%= cfg.buildDir %>.',
          help: 'Prints the available workflows.'
        }
      }
    }
  });
};
