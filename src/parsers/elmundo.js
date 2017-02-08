/**
 * Parse an article page of "elmundo"
 *
 * @param $ {object}   A cheerio DOM object of the article page
 *
 * @return {string} the HTML content of the article
 */
module.exports = function ($) {
  const allowedTags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  let content = $('<div></div>')

  $('.news-item [itemprop=articleBody]')
    .children()
    .filter(function (i, el) {
      return allowedTags.indexOf($(this).prop('tagName').toLowerCase()) !== -1
    })
    .filter(function (i, el) {
      return !$(this).hasClass('summary-lead')
    })
    .each(function (i, el) {
      $(content).append($(this))
    })

  return content.html()
}
