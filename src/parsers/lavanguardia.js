const tagFilter = require('./lib/tagFilter')
/**
 * Parse an article page of "lavanguardia"
 *
 * @param $ {object}   A cheerio DOM object of the article page
 *
 * @return {string} the HTML content of the article
 */
module.exports = function parse ($) {
  return {
    title: getTitle($),
    image: getImage($),
    html: getHtml($)
  }
}

function getTitle ($) {
  return $('meta[property="og:title"]').attr('content')
}

function getImage ($) {
  return $('meta[property="og:image"]').attr('content')
}

function getHtml ($) {
  let content = $('<div></div>')

  $('div[itemprop=articleBody]')
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
