const request = require('request')
const cheerio = require('cheerio')

module.exports = function getContent(sourceUrl) {
  return new Promise((accept, reject) => {
    request(sourceUrl, function (error, response, html) {
      if (error) {
        reject(error)
        return
      }

      const $ = cheerio.load(html, {
        normalizeWhitespace: true
      })
      const allowedTags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
      let content = $('<div></div>')

      $('.cuerpo-articulo > div')
        .children()
        .filter(function (i, el) {
          return allowedTags.indexOf($(this).prop('tagName').toLowerCase()) !== -1
        })
        .each(function (i, el) {
          $(content).append($(this))
        })

      accept(content.html())
    })
  })
}
