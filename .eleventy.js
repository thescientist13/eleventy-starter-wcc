const path = require('path');
const { pathToFileURL } = require('url');
const wccPlugin = require('eleventy-plugin-wcc');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/assets/**/*');
  eleventyConfig.addPassthroughCopy('./src/**/*.css');

  eleventyConfig.addPlugin(wccPlugin, {
    definitions: [
      pathToFileURL(path.join(__dirname, './src/components/footer.js')),
      pathToFileURL(path.join(__dirname, './src/components/header.js')),
      pathToFileURL(path.join(__dirname, './src/components/balloon.js'))
    ]
  });

  return {
    dir: {
      input: './src'
    }
  }
};
