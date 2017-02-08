const flatten = require('lodash/fp/flatten')
const uniqWith = require('lodash/fp/uniqWith')

const google = require('googleapis')
const customsearch = google.customsearch('v1')
const CX = process.env.CX
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

/**
 * Gets a list of 10 news in certain media containing some terms
 *
 * @param {array}  terms    List of terms (strings) to look for
 * @param {object} options  Some extra options:
 *
 * @param options.year   Year of publishing
 * @param options.month  Month of publishing
 * @param options.date   Date of month of publishing
 * @param options.media  (optional) Media ID. If specified, search will be
 *    performed only in a single media. Accepted values:
 *    - elpais
 *    - elmundo
 *    - lavanguardia
 *    - abc
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

  const sites = {
    elpais: 'elpais.com',
    abc: 'abc.es',
    elmundo: 'elmundo.es',
    lavanguardia: 'lavanguardia.com'
  }

  const {
    year,
    month,
    date,
    media } = options

  const dateString = year + '' + (month < 10 ? '0' + month : month) + '' + date
  const params = {
    cx: CX,
    cr: 'countryES',
    auth: GOOGLE_API_KEY,
    q: query,
    num: 10,
    sort: `date:r:${dateString}:${dateString}`,
    fields: 'queries(nextPage(count,startIndex)),searchInformation(totalResults),items(link,title,pagemap(metatags))',
    siteSearch: sites[media] || ''
  }

  return new Promise((accept, reject) => {
    customsearch.cse.list(params, function (err, resp) {
      if (err) {
        reject(err)
        return
      }

      const list = (resp.items && resp.items.map(({ title, link }) => ({ title, link }))) || []
      accept(list)
    })
  })
}
