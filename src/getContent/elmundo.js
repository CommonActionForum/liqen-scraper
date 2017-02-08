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

      accept(content.html())
    })
  })
}
