const downloadArticle = require('./downloadArticle')

/**
 * Get the content of an article given its URI
 *
 * @param {string} uri - URI of the news article.
 *
 * @return {Promise<string>} Promise of the HTML
 */
module.exports = function getContent (uri) {
  return downloadArticle(uri)
    .then(article => article.html)
}
