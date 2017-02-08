const filter = require('lodash/fp/filter')
const map = require('lodash/fp/map')

// Test to call
const googleSearch = require('../src/getNewsList/google')
const getContent = require('../src/getContent')

// 1. Call Google search
googleSearch(['agua', 'lluvia', 'rajoy'], {year: 2016, month: 1, date: 12})
// 2. Transform the "list of links" into "list of (Promise of) contents"
  .then(map(article => getContent(article.link)))
// 3. Get all the content from the list of promises
  .then(promises => Promise.all(promises))
// 4. Display
  .then(contents => {
    const nonBlank = contents.filter(content => content !== '')

    console.log('Articles returned by the search:', contents.length)
    console.log('Articles scrapped succesfully:  ', nonBlank.length)
    console.log()
    console.log('Scrapped articles:')

    for (content of nonBlank) {
      console.log(content.slice(0,100), '...')
    }
  })
  .catch(reason => {
    console.log(reason)
  })
