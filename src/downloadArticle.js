const url = require('url')
const request = require('request-promise')
const cheerio = require('cheerio')

const parsers = {
  elmundo: require('./parsers/elmundo'),
  elpais: require('./parsers/elpais')
}

/**
 * A full article object
 *
 * @typedef {Object} Article
 * @property {string} title  - The title of the article
 * @property {string} html   - The content of the article in HTML
 * @property {string} image  - The heading image URI of the article
 */

/**
 * @private
 */
function getMedia (hostname) {
  const patterns = {
    elmundo: /elmundo\.es/,
    elpais: /elpais\.com/
  }

  for (const id in patterns) {
    if (patterns[id].test(hostname)) {
      return id
    }
  }
  return null
}

/**
 * Get the data of an article given its URI
 *
 * @param {string} uri   URI of the news article
 *
 * @return {Promise<Article>} Promise of the article
 */
module.exports = function downloadArticle (uri) {
  const media = getMedia(url.parse(uri).hostname)

  if (!media) {
    throw new Error('The provided URI do not match with any known media')
  }

  const parse = parsers[media]
  const options = {
    transform: function (body) {
      return cheerio.load(body)
    },
    uri
  }

  return request(options)
    .then(parse)
}
