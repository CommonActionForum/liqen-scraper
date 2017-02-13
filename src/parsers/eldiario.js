const tagFilter = require('./lib/tagFilter')
/**
 * Parse an article page of "eldiario"
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

  $('#edi-body')
    .children()
    .filter(tagFilter($))
    .each(function (i, el) {
      $(content).append($(this))
    })

  return content.html()
}
