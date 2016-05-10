module.exports = grunt => {
  const env = grunt.option('env') || 'local';

  grunt.config('shell', {
    generate: `node config/lib/generate.js ${env}`,
    watch: `node config/lib/watch.js ${env}`
  });
};
