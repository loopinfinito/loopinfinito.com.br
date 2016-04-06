const config = require('../package.json').config;
const metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const watch = require('metalsmith-watch');


module.exports = workingdir => {
  const pipeline = metalsmith(workingdir)
    .source(config.contentDir)
    .use(markdown());

  const buildCallback = (err, files) => {
    if(err) throw err;
    else console.log('DONE OK 🚀')
  };

  return {
    build: () => pipeline.build(buildCallback),
    watch: () => pipeline
      .use(watch(config.metalsmith.watch))
      .build(buildCallback)
  }
};
