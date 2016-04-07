const config = require('../package.json').config;
const metalsmith = require('metalsmith');
const metallic = require('metalsmith-metallic');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const watch = require('metalsmith-watch');


module.exports = workingdir => {
  const pipeline = metalsmith(workingdir)
    .source(config.contentDir)
    .use(metallic())
    .use(markdown(config.metalsmith.markdown))
    .use(layouts(config.metalsmith.layouts));

  const afterBuild = (err, files) => {
    if(err) throw err;
    else console.log('DONE OK 🚀')
  };

  return {
    build: () => pipeline.build(afterBuild),
    watch: () => pipeline
      .use(watch(config.metalsmith.watch))
      .build(afterBuild)
  }
};
