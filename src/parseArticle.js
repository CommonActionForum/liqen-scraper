const tagFilter = require('./parsers/lib/tagFilter')

/**
 * Parses an article
 *
 * @param  {object} $         A cheerio DOM object including the article
 * @param  {object} request   Extra information
 *
 * @return {Article}    The information of the article
 */
module.exports = function parseArticle ($, options) {
  return {
    title: title($),
    image: image($),
    html: html($)
  }
}

/**
 * @private
 *
 * Get the title of an article
 *
 * @param {object} $   A cheerio DOM object of the article
 * @return {string}    The title of the article
 */
function title ($) {
  return $('meta[property="og:title"]').attr('content') ||
         ''
}

/**
 * @private
 *
 * Get the heading image URI of an article
 *
 * @param  {object} $   A cheerio DOM object of the article
 * @return {string}     The absolute URI of the heading image
 */
function image ($) {
  return $('figure[representativeofpage=true] img').attr('src') ||
         $('meta[property="og:image"]').attr('content') ||
         ''
}

/**
 * @private
 *
 * Get the html content of an article
 *
 * @param {object} $   A cheerio DOM object of the article
 * @return {string}    The HTML of the "body" of the article
 */
function html ($) {
  // Search the first matching of the following selectors
  function getContainer () {
    const selectors = [
      '[itemprop=articleBody] [itemProp=text]',
      '[itemprop=articleBody]',
      '#cuerpo_noticia',
      '#edi-body',
      '#news-body-center',
      '.cuerpo-articulo > div',
      '.main .cuerpo-noticia',
      '.detalleFullTexto .editorHTML .text',
      '#content .mce-body',
      '#mainentrycontent',
      '<div></div>'
    ]

    for (let i = 0; i < selectors.length; i++) {
      if ($(selectors[i]).length > 0) {
        return $(selectors[i])
      }
    }
  }

  const container = getContainer()

  // Create the article to return
  const content = $('<div></div>')

  container
    .children()
    .filter(tagFilter($))
    .filter(function (i, el) {
      // Eliminates the "quotes" inside the article
      return !$(this).hasClass('summary-lead')
    })
    .filter(function (i, el) {
      // Eliminates the "quotes" inside the article
      return !$(this).hasClass('despiece')
    })
    .filter(function (i, el) {
      // In case of "elperiodico"
      return $(this).children('.fecha').length === 0
    })
    .filter(function (i, el) {
      // Remove the date. (Specific for "EUROPA PRESS")
      return $(this).text().indexOf('(EUROPA PRESS) -') === -1
    })
    .each(function (i, el) {
      $(content).append($(el))
    })

  return content.html()
}
