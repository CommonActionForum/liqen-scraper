/**
 * Parse an article page of "elperiodico"
 *
 * @param $ {object}   A cheerio DOM object of the article page
 *
 * @return {string} the HTML content of the article
 */
module.exports = function ($) {
  const allowedTags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  let content = $('<div></div>')

  $('.main .cuerpo-noticia')
    .children()
    .filter(function (i, el) {
      return allowedTags.indexOf($(this).prop('tagName').toLowerCase()) !== -1
    })
    .each(function (i, el) {
      if (i !== 0) {
        $(content).append($(this))
      }
    })

  return content.html()
}
