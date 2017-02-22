const google = require('googleapis')
const customsearch = google.customsearch('v1')
const format = require('date-fns/format')
const parse = require('date-fns/parse')

const CX = process.env.CX
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

module.exports = function advancedSearch (term, {
  startDate = '2016-01-01',
  endDate = '2016-12-31',
  media = '',
  offset = 0
} = {}) {
  // Map of medias and sites
  const sites = {
    abc: 'abc.es',
    ara: 'ara.cat',
    elconfidencial: 'elconfidencial.com',
    eldiario: 'eldiario.es',
    elespanol: 'elespanol.com',
    elmundo: 'elmundo.es',
    elpais: 'elpais.com',
    elperiodico: 'elperiodico.com',
    esdiario: 'esdiario.com',
    europapress: 'europapress.es',
    huffingtonpost: 'huffingtonpost.es',
    lainformacion: 'lainformacion.com',
    larazon: 'larazon.es',
    lavanguardia: 'lavanguardia.com',
    lavozdegalicia: 'lavozdegalicia.es',
    libertaddigital: 'libertaddigital.com',
    naciodigital: 'naciodigital.cat',
    okdiario: 'okdiario.com',
    publico: 'publico.es'
  }

  const startDateString = format(parse(startDate), 'YYYYMMDD')
  const endDateString = format(parse(endDate), 'YYYYMMDD')

  // Parameters of the google search
  const params = {
    cx: CX,
    cr: 'countryES',
    auth: GOOGLE_API_KEY,
    q: term,
    num: 10,
    start: offset,
    sort: `date:r:${startDateString}:${endDateString}`,
    fields: 'items(title,link,pagemap(cse_image,metatags(date,og:title,dc.title))),searchInformation(totalResults)',
    siteSearch: sites[media] || ''
  }

  return promisedSearch(params)
    .then(resp => {
      const items = (resp.items && resp.items.map(mapItem)) || []
      const searchInformation = {
        totalResults: resp.searchInformation.totalResults
      }

      return {items, searchInformation}
    })
    .catch(err => {
      console.log(err)
    })
}

/**
 * @private
 *
 * Return the useful information for each search result item
 */
function mapItem (item) {
  const title = item.pagemap.metatags[0]['og:title'] ||
                item.pagemap.metatags[0]['dc.title'] ||
                item.title

  return {
    title,
    link: item.link,
    date: item.pagemap.metatags[0].date,
    image: item.pagemap.cse_image[0].src,
    author: item.pagemap.metatags[0].author
  }
}

/**
 * @private
 *
 * Make the custom search using a promise instead of callbacks
 */
function promisedSearch (params) {
  return new Promise((resolve, reject) => {
    customsearch.cse.list(params, function (err, resp) {
      if (err) {
        reject(err)
        return
      }

      resolve(resp)
    })
  })
}
