const pluginNavigation = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const htmlmin = require("html-minifier");
const Image = require("@11ty/eleventy-img");
const sharp = require("sharp");
// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

// Create a helpful production flag
const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

module.exports = (eleventyConfig) => {
  //html minifier
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  /// Markdown Component from Markdown-it
  const md = require('markdown-it')();
  md.use(require('markdown-it-footnote').default);
  md.use(require('markdown-it-container').default);
  let options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  };

  eleventyConfig.setLibrary("md", markdownIt(options)
    .use('url_new_win', 'link_open', function (tokens, idx) {
      const [attrName, href] = tokens[idx].attrs.find(attr => attr[0] === 'href');
      if (href && (!href.includes('franknoirot.co') && !href.startsWith('/') && !href.startsWith('#'))) {
        tokens[idx].attrPush(['target', '_blank']);
        tokens[idx].attrPush(['rel', 'noopener noreferrer']);
      }
    })

    .use(markdownItFootnote)
    .use(markdownItContainer, 'callout')
    .use(markdownItContainer, 'callout-blue')
    .use(markdownItContainer, 'callout-pink')
    .use(markdownItContainer, 'callout-green')
    .use(markdownItContainer, 'warning')

  );


  //shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("Image", async (src, alt) => {
    if (!alt) {
      throw new Error(`Missing \`alt\` on myImage from: ${src}`);
    }

    let stats = await Image(src, {
      widths: [25, 320, 640, 960, 1200, 1800, 2400],
      formats: ["jpeg", "webp"],
      urlPath: "/images/",
      outputDir: "./dist/images/",
    });

    let lowestSrc = stats["jpeg"][0];

    const placeholder = await sharp(lowestSrc.outputPath)
      .resize({ fit: sharp.fit.inside })
      .blur()
      .toBuffer();

    const base64Placeholder = `data:image/png;base64,${placeholder.toString(
      "base64"
    )}`;

    const srcset = Object.keys(stats).reduce(
      (acc, format) => ({
        ...acc,
        [format]: stats[format].reduce(
          (_acc, curr) => `${_acc} ${curr.srcset} ,`,
          ""
        ),
      })
    );

    const source = `<source type="image/webp" data-srcset="${srcset["webp"]}" >`;

    const img = `<img
      class="lazy"
      alt="${alt}"
      src="${base64Placeholder}"
      data-src="${lowestSrc.url}"
      data-sizes='(min-width: 1024px) 1024px, 100vw'
      data-srcset="${srcset["jpeg"]}"
      width="${lowestSrc.width}"
      height="${lowestSrc.height}">`;

    return `<div class="image-wrapper"><picture> ${source} ${img} </picture></div>`;
  });
  //data deep merge
  eleventyConfig.setDataDeepMerge(true);

  //syntax highlight
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->",
  });
  // Add filters
  eleventyConfig.addFilter('dateFilter', dateFilter);
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);

  // Plugins
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(pluginNavigation);

  // Returns books items, sorted by display order
  eleventyConfig.addCollection('books', collection => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob('./src/books/*.md'));
  });


  // Returns books items, sorted by display order
  eleventyConfig.addCollection('javanotes', collection => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob('./src/javanotes/*.md'));
  });

  // Returns a collection of blog posts in reverse date order
  eleventyConfig.addCollection('blog', collection => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
  });

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy('src/admin');

  eleventyConfig.setTemplateFormats(["jpg", "png", "webp", "md", "njk", "html"]);
  return {
    markdownTemplateEngine: 'liquid',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};