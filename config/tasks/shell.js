module.exports = grunt => {
  grunt.config('shell', {
    generate: 'node config/lib/generate.js',
    watch: 'node config/lib/watch.js'
  });
};
