const url = require('url');
const ENV = process.argv[2];


module.exports = {
  resolveInit: (pipeline, config) => {
    return path => {
      const baseurl = ENV === 'prod' ? `http://${pipeline.metadata().site.host}` : '/';
      return url.resolve(baseurl, path);
    }
  },

  url: host => (/^https?\:\/\/.*/).test(host) ? host : `http://${host}`
};
