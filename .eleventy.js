const path = require('path');
const { pathToFileURL } = require('url');
const wccPlugin = require('eleventy-plugin-wcc');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(wccPlugin, {
    definitions: [
      pathToFileURL(path.join(__dirname, './src/components/header.js'))
    ]
  });

  return {
    dir: {
      input: './src'
    }
  }
};