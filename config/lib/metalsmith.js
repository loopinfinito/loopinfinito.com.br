const config = require('../config.json');
const metalsmith = require('metalsmith');
const plugins = require('load-metalsmith-plugins')();
const nunjucks = require('nunjucks');
const nunjucksdate = require('nunjucks-date-filter');
const consolidate = require('consolidate');
const moment = require('moment');
const urlfilters = require('./helpers/url');


module.exports = workingdir => {
  const pipeline = metalsmith(workingdir)
    .source(config.contentDir)
    .destination(config.buildDir)
    .use(plugins.metadata(config.metalsmith.metadata))
    .use(plugins.dateInFilename())
    .use(plugins.filemetadata(config.metalsmith.filemetadata))
    .use(plugins.tags(config.metalsmith.tags))
    .use(plugins.collections(config.metalsmith.collections))
    .use(plugins.propdown(config.metalsmith.propdown))
    .use(plugins.author(config.metalsmith.author))
    .use(plugins.slug(config.metalsmith.slug))
    .use(plugins.inPlace(config.metalsmith.layouts))
    .use(plugins.metallic())
    .use(plugins.markdown(config.metalsmith.markdown))
    .use(plugins.ignore(config.metalsmith.ignore))
    .use(plugins.pagination(config.metalsmith.pagination))
    .use(plugins.permalinks(config.metalsmith.permalinks))
    .use(plugins.mapsite(config.metalsmith.mapsite))
    .use(plugins.feedAtom(config.metalsmith.feedatom))
    .use(plugins.layouts(config.metalsmith.layouts));

  moment.locale('pt');
  consolidate.requires.nunjucks = nunjucks
    .configure(config.nunjucks)
    .addFilter('date', nunjucksdate)
    .addFilter('url', urlfilters.url)
    .addFilter('urlresolve', urlfilters.resolveInit(pipeline, config))
    .addGlobal('context', function(){ return this.ctx });

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
