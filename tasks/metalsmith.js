const config = require('../package.json').config;
const metalsmith = require('metalsmith');
const collections = require('metalsmith-collections');
const dateinfilename = require('metalsmith-date-in-filename');
const metallic = require('metalsmith-metallic');
const markdown = require('metalsmith-markdown');
const inplace = require('metalsmith-in-place');
const layouts = require('metalsmith-layouts');
const watch = require('metalsmith-watch');


module.exports = workingdir => {
  const pipeline = metalsmith(workingdir)
    .source(config.contentDir)
    .use(dateinfilename())
    .use(collections(config.metalsmith.collections))
    .use(inplace(config.metalsmith.layouts))
    .use(metallic())
    .use(markdown(config.metalsmith.markdown))
    .use(layouts(config.metalsmith.layouts));

  const afterBuild = (err, files) => {
    if(err) throw err;
    else console.log('DONE OK 🚀');
  };

  return {
    build: () => pipeline.build(afterBuild),
    watch: () => pipeline
      .use(watch(config.metalsmith.watch))
      .build(afterBuild)
  }
};
