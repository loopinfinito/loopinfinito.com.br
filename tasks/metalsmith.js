const config = require('../package.json').config;
const metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');


module.exports = workingdir => {
  const pipeline = metalsmith(workingdir)
    .source(config.contentDir)
    .use(markdown());

  return {
    build: pipeline.build.bind(pipeline, (err, files) => {
      if(err) throw err;
      else console.log('DONE OK 🚀')
    })
  }
};
