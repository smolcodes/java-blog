const pluginNavigation = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const htmlmin = require("html-minifier");
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const slugify = require("slugify");
const Image = require("@11ty/eleventy-img");
const sharp = require("sharp");
const pluginTOC = require('eleventy-plugin-toc')
const markdownItAnchor = require('markdown-it-anchor')
const { DateTime } = require("luxon");

const mdOptions = {
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
}
const mdAnchorOpts = {
  permalink: true,
  permalinkClass: 'anchor-link',
  permalinkSymbol: '#',
  level: [1, 2, 3, 4]
}

// Filters
const w3DateFilter = require('./src/filters/w3-date-filter.js');

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === 'production';

// Footnotes
const footnotes = require('eleventy-plugin-footnotes');

// Embed Media
const embeds = require("eleventy-plugin-embed-everything");

const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

module.exports = function (eleventyConfig) {
  //Embed Media
  eleventyConfig.addPlugin(embeds)
  eleventyConfig.addPlugin(footnotes)
  eleventyConfig.addFilter("asPostDate", (dateObj) => {
     return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });
  
  //html minifier
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
      // Eleventy 1.0+: use this.inputPath and this.outputPath instead
      if (outputPath && outputPath.endsWith(".html")) {
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
    let markdownIt = require("markdown-it");
    let markdownItFootnote = require("markdown-it-footnote");
    let markdownItContainer = require("markdown-it-container");
    let options = {
      html: true,
      breaks: true,
      linkify: true,
      typographer: true
    };
    eleventyConfig.setLibrary("md", markdownIt(options)
    .use(markdownItFootnote)
    .use(markdownItAnchor, mdAnchorOpts)
    .use(markdownItContainer, 'callout')
    .use(markdownItContainer, 'callout-yellow')
    .use(markdownItContainer, 'callout-blue')
    .use(markdownItContainer, 'callout-pink')
    .use(markdownItContainer, 'callout-purple')
    .use(markdownItContainer, 'callout-green')
    .use(markdownItContainer, 'warning')
    );
    eleventyConfig.addPlugin(pluginTOC)
	 //shortcodes
   eleventyConfig.addNunjucksAsyncShortcode("myImage", async (src, alt) => {
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
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);

  // Plugins
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(pluginNavigation);

    // Returns random items, sorted by display order
    eleventyConfig.addCollection('random', collection => {
    return [...collection.getFilteredByGlob('./src/misc/*.md')].reverse();
  });

      // Returns books items, sorted by display order
      eleventyConfig.addCollection('books', collection => {
        return sortByDisplayOrder(
          collection.getFilteredByGlob('./src/books/*.md'));
      });

    // Returns links items, sorted by display order
    eleventyConfig.addCollection('links', collection => {
      return [...collection.getFilteredByGlob('./src/links/*.md')].reverse();
    });

    // Returns javanotes items, sorted by display order
    eleventyConfig.addCollection('javanotes', collection => {
        return [...collection.getFilteredByGlob('./src/javanotes/*.md')].reverse();

    });


    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter("head", (array, n) => {
      if(!Array.isArray(array) || array.length === 0) {
        return [];
      }
      if( n < 0 ) {
        return array.slice(n);
      }
  
      return array.slice(0, n);
    });
  
    // Return the smallest number argument
    eleventyConfig.addFilter("min", (...numbers) => {
      return Math.min.apply(null, numbers);
    });
  
    function filterTagList(tags) {
      return (tags || []).filter(tag => ["all", "nav", "post", "posts","links","link"].indexOf(tag) === -1);
    }

  eleventyConfig.addFilter("filterTagList", filterTagList)
// Tag Cloud
  eleventyConfig.addCollection('tagList', collection => {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });

  // Returns a collection of blog posts in reverse date order
  eleventyConfig.addCollection('blog', collection => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
  });


  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};