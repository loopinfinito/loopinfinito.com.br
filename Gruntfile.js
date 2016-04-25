module.exports = (grunt) => {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    paths: grunt.file.readJSON('config/config.json')
  });

  grunt.loadTasks('config/tasks');
};
