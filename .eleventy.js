import { wccPlugin } from 'eleventy-plugin-wcc';

export default function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/assets/**/*');
  eleventyConfig.addPassthroughCopy('./src/**/*.css');

  eleventyConfig.addPlugin(wccPlugin, {
    definitions: [
      new URL('./src/components/header.js', import.meta.url),
      new URL('./src/components/footer.js', import.meta.url),
      new URL('./src/components/balloon.js', import.meta.url)
    ],
    // TODO: figure out why this is necessary to avoid extra <p> tags
    trimParagraphTagsInMd: false,
  });

  return {
    dir: {
      input: './src'
    }
  }
};
