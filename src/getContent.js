const request = require('request-promise')
const cheerio = require('cheerio')
const url = require('url')

const parsers = {
  abc: require('./parsers/abc'),
  elmundo: require('./parsers/elmundo'),
  elpais: require('./parsers/elpais'),
  larazon: require('./parsers/larazon'),
  lavanguardia: require('./parsers/lavanguardia')
}

const patterns = {
  abc: /abc\.es/,
  elmundo: /elmundo\.es/,
  elpais: /elpais\.com/,
  larazon: /larazon\.es/,
  lavanguardia: /lavanguardia\.com/
}

function getMedia (hostname) {
  for (const id in patterns) {
    if (patterns[id].test(hostname)) {
      return id
    }
  }
  return null
}

/**
 * Get the content of an article given its URI
 *
 * @param {string} uri - URI of the news article.
 *
 * @return {Promise<string>} Promise of the HTML
 */
module.exports = function getContent (uri) {
  const media = getMedia(url.parse(uri).hostname)

  if (!media) {
    throw new Error('The provided URI do not match with any known media')
  }

  const options = {
    transform: function (body) {
      return cheerio.load(body)
    },
    uri
  }

  return request(options)
    .then(parsers[media])
}
