const config = require('./metalsmith.json');
const metalsmith = require('metalsmith');
const collections = require('metalsmith-collections');
const dateinfilename = require('metalsmith-date-in-filename');
const filemetadata = require('metalsmith-filemetadata');
const permalinks = require('metalsmith-permalinks');
const pagination = require('metalsmith-pagination');
const metallic = require('metalsmith-metallic');
const markdown = require('metalsmith-markdown');
const inplace = require('metalsmith-in-place');
const layouts = require('metalsmith-layouts');
const watch = require('metalsmith-watch');
const slug = require('metalsmith-slug');
const tags = require('metalsmith-tags');
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
    .use(metallic())
    .use(markdown(config.metalsmith.markdown))
    .use(pagination(config.metalsmith.pagination))
    .use(tags(config.metalsmith.tags))
    .use(permalinks(config.metalsmith.permalinks))
    .use(inplace(config.metalsmith.layouts))
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
