const tagFilter = require('./lib/tagFilter')
/**
 * Parse an article page of "elpais"
 *
 * @param $ {object}   A cheerio DOM object of the article page
 *
 * @return {string} the HTML content of the article
 */
module.exports = function ($) {
  let content = $('<div></div>')

  $('#cuerpo_noticia')
    .children()
    .filter(tagFilter($))
    .each(function (i, el) {
      $(content).append($(this))
    })

  return content.html()
}
