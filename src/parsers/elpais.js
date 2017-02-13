const tagFilter = require('./lib/tagFilter')
/**
 * Parse an article page of "elpais"
 *
 * @param $ {object}   A cheerio DOM object of the article page
 *
 * @return {Article}   The article object
 */
module.exports = function parse ($) {
  return {
    title: getTitle($),
    image: getImage($),
    html: getHtml($)
  }
}

function getTitle ($) {
  return $('meta[name="DC.title"]').attr('content')
}

function getImage ($) {
  // This one has a "El País" blue footer
  // $('meta[property="oc:image"]').attr('content')
  // example: http://ep00.epimg.net/politica/imagenes/2017/02/12/actualidad/1486920960_492473_1486974547_rrss_normal.jpg

  return $('figure[representativeofpage=true] img').attr('src')
}

function getHtml ($) {
  let content = $('<div></div>')

  $('#cuerpo_noticia')
    .children()
    .filter(tagFilter($))
    .each(function (i, el) {
      $(content).append($(this))
    })

  return content.html()
}
