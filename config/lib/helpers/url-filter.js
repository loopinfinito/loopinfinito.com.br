const ENV = process.argv[2];


module.exports = (pipeline, config) => {
  return path => {
    const baseurl = ENV === 'prod' ? `http://${pipeline.metadata().site.host}` : '';
    return `${baseurl}/${path}`;
  }
};
