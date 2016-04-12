const config = require('../package.json').config;
const metalsmith = require('metalsmith');
const collections = require('metalsmith-collections');
const dateinfilename = require('metalsmith-date-in-filename');
const filemetadata = require('metalsmith-filemetadata');
const permalinks = require('metalsmith-permalinks');
const metallic = require('metalsmith-metallic');
const markdown = require('metalsmith-markdown');
const inplace = require('metalsmith-in-place');
const layouts = require('metalsmith-layouts');
const watch = require('metalsmith-watch');
const slug = require('metalsmith-slug');
const nunjucks = require('nunjucks');
const consolidate = require('consolidate');


consolidate.requires.nunjucks = nunjucks.configure(config.nunjucks);


module.exports = workingdir => {
  const pipeline = metalsmith(workingdir)
    .source(config.contentDir)
    .use(dateinfilename())
    .use(filemetadata(config.metalsmith.filemetadata))
    .use(collections(config.metalsmith.collections))
    .use(slug(config.metalsmith.slug))
    .use(inplace(config.metalsmith.layouts))
    .use(metallic())
    .use(markdown(config.metalsmith.markdown))
    .use(permalinks(config.metalsmith.permalinks))
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
