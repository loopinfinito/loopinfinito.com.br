module.exports = grunt => {
  grunt.config('connect', {
    server: {
      options: {
        port: 4001,
        port: grunt.config.data.cfg.serverPort,
        base: 'build',
        keepalive: true
      }
    }
  });
};
