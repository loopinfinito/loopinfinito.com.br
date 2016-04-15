const config = require('./metalsmith.json');
const metalsmith = require('metalsmith');
const plugins = require("load-metalsmith-plugins")();
const nunjucks = require('nunjucks');
const consolidate = require('consolidate');


consolidate.requires.nunjucks = nunjucks.configure(config.nunjucks);


module.exports = workingdir => {
  const pipeline = metalsmith(workingdir)
    .source(config.contentDir)
    .use(plugins.dateInFilename())
    .use(plugins.filemetadata(config.metalsmith.filemetadata))
    .use(plugins.collections(config.metalsmith.collections))
    .use(plugins.slug(config.metalsmith.slug))
    .use(plugins.ignore(config.metalsmith.ignore))
    .use(plugins.metallic())
    .use(plugins.markdown(config.metalsmith.markdown))
    .use(plugins.pagination(config.metalsmith.pagination))
    .use(plugins.tags(config.metalsmith.tags))
    .use(plugins.permalinks(config.metalsmith.permalinks))
    .use(plugins.inPlace(config.metalsmith.layouts))
    .use(plugins.layouts(config.metalsmith.layouts));

  const afterBuild = (err, files) => {
    if(err) throw err;
    else console.log('🚀  SHIP IT 🚀');
  };

  return {
    build: () => pipeline.build(afterBuild),
    watch: () => pipeline
      .use(plugins.watch(config.metalsmith.watch))
      .build(afterBuild)
  }
};
