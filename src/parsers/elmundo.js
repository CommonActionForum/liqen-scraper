const tagFilter = require('./lib/tagFilter')
/**
 * Parse an article page of "elmundo"
 *
 * @param $ {object}   A cheerio DOM object of the article page
 *
 * @return {string} the HTML content of the article
 */
module.exports = function ($) {
  let content = $('<div></div>')

  $('.news-item [itemprop=articleBody]')
    .children()
    .filter(tagFilter($))
    .filter(function (i, el) {
      return !$(this).hasClass('summary-lead')
    })
    .each(function (i, el) {
      $(content).append($(this))
    })

  return content.html()
}
