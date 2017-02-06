const flatten = require('lodash/fp/flatten')
const uniqWith = require('lodash/fp/uniqWith')

const google = require('googleapis')
const customsearch = google.customsearch('v1')
const CX = process.env.CX
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

/**
 * Gets a list of 10 news in "elpais" containing certains terms
 *
 * @param {array}  terms    List of terms (strings) to look for
 * @param {object} options  Some extra options:
 *
 * @param options.year   Year of publishing
 * @param options.month  Month of publishing
 * @param options.date   Date of month of publishing
 *
 * Returns a Promise that will be fulfilled with a list of { title, link }
 * article objects where:
 * - `title` is the title of the article
 * - `link` is the link for that article
 *
 * The following environmental variables must be set:
 * - `GOOGLE_API_KEY`, the API key obtained from google
 * - `CX`, the ID of the Search Engine
 */
module.exports = function getListFromTerms(terms, options) {
  const promises = terms.map(term => getList(term, options))
  const isEqual = (o1, o2) => o1.link === o2.link

  return Promise
    .all(promises)
    .then(flatten)
    .then(uniqWith(isEqual))
}


/**
 * @private
 *
 * Get a list of 10 news in "elpais" containing a term
 */
function getList(query, options) {
  if (!CX) {
    throw new Error('Environmental variable CX not set')
  }

  if (!GOOGLE_API_KEY) {
    throw new Error('Environmental variable GOOGLE_API_KEY not set')
  }
  const {
    year,
    month,
    date } = options

  const dateString = year + '' + (month < 10 ? '0' + month : month) + '' + date
  const params = {
    cx: CX,
    auth: GOOGLE_API_KEY,
    q: query,
    num: 10,
    sort: `date:r:${dateString}:${dateString}`,
    fields: 'queries(nextPage(count,startIndex)),searchInformation(totalResults),items(link,title,pagemap(metatags))',
  }

  return new Promise((accept, reject) => {
    customsearch.cse.list(params, function (err, resp) {
      if (err) {
        reject(err)
        return
      }

      const list = resp.items.map(({ title, link }) => ({ title, link }))
      accept(list)
    })
  })
}
