const path = require('path');
const { pathToFileURL } = require('url');
const wccPlugin = require('eleventy-plugin-wcc');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/**/*.css');

  eleventyConfig.addPlugin(wccPlugin, {
    definitions: [
      pathToFileURL(path.join(__dirname, './src/components/spinner.js'))
    ]
  });

  return {
    dir: {
      input: './src'
    }
  }
};