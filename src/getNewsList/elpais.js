const request = require('request')
const cheerio = require('cheerio')
const url = require('url')

/**
 * Get a list of news of a certain date published in "el país"
 *
 * @param year    - year of publishing
 * @param month   - month of publishing
 * @param date    - date of month of publishing
 * @param edition - "m", "t" or "n" for morning, afternoon and night editions
 *
 * Returns a Promise that will be fulfilled with a list of { title, link } objects where:
 *
 * - `title` is the title of the news
 * - `link` is the link for that news
 */
module.exports = function getList (year, month, date, edition) {
  // TODO check parameters

  // Compose the URL
  const searchUrl = `http://elpais.com/hemeroteca/elpais/${year}/${month}/${date}/${edition}/portada.html`

  return new Promise((resolve, reject) => {
    request(searchUrl, function (error, response, html) {
      if (error) {
        reject(error)
        return
      }

      const $ = cheerio.load(html)
      const array = []

      $('div.article h2 a').each(function (i, element) {
        const title = $(element).text()
        const href = $(element).attr('href')

        const absoluteUrl = url.resolve(searchUrl, href)
        array.push({title, absoluteUrl})
      })

      resolve(array)
    })
  })
}
