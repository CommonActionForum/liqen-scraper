const request = require('request-promise')
const cheerio = require('cheerio')
const url = require('url')
const downloadArticle = require('./downloadArticle')

const parsers = {
  abc: require('./parsers/abc'),
  elconfidencial: require('./parsers/elconfidencial'),
  eldiario: require('./parsers/eldiario'),
  elmundo: require('./parsers/elmundo'),
  elperiodico: require('./parsers/elperiodico'),
  larazon: require('./parsers/larazon'),
  lavanguardia: require('./parsers/lavanguardia')
}

const patterns = {
  abc: /abc\.es/,
  elconfidencial: /elconfidencial\.com/,
  eldiario: /eldiario\.es/,
  elmundo: /elmundo\.es/,
  elperiodico: /elperiodico\.com/,
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
  // Decide if use the new "getContent" function or the old one
  const media = getMedia(url.parse(uri).hostname)

  if (media) {
    return oldGetContent(uri)
  } else {
    return newGetContent(uri)
  }
}

/**
 * @private
 *
 * Get the content of an article given its URI
 *
 * @param {string} uri - URI of the news article.
 *
 * @return {Promise<string>} Promise of the HTML
 */
function newGetContent (uri) {
  return downloadArticle(uri)
    .then(article => article.html)
}

/**
 * @private
 * @deprecated since version 1.3. This will be replaced with "getContent"
 *
 * Get the content of an article given its URI
 *
 * @param {string} uri - URI of the news article.
 *
 * @return {Promise<string>} Promise of the HTML
 */
function oldGetContent (uri) {
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
