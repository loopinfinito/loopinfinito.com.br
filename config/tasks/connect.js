module.exports = grunt => {
  grunt.config('connect', {
    server: {
      options: {
        port: '<%= cfg.serverPort %>',
        base: '<%= cfg.buildDir %>',
        keepalive: true
      }
    }
  });
};
