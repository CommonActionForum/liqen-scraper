const filter = require('lodash/fp/filter')
const map = require('lodash/fp/map')

// Test to call
const googleSearch = require('./src/getNewsList/google')
const getContent = require('./src/getContent/elpais')

// 1. Call Google search
googleSearch(['agua', 'lluvia', 'rajoy'], {year: 2016, month: 1, date: 12})
// 2. Transform the "list of links" into "list of (Promise of) contents"
  .then(map(article => getContent(article.link)))
// 3. Get all the content from the list of promises
  .then(promises => Promise.all(promises))
// 4. Eliminate all blank content articles
  .then(filter(content => content !== ''))
// 5. Display
  .then(contents => {
    console.log('---- Showing all contents ----')
    console.log('Length: ', contents.length)
    for (content of contents) {
      console.log(content.slice(0,100), '...')
    }
  })
  .catch(reason => {
    console.log(reason)
  })



//elpais('2016', '01', '01', 'm')
//  .then(content => { console.log(content) })

//elpais2('http://internacional.elpais.com/internacional/2016/01/01/actualidad/1451637621_839243.html')
//  .then(content => {
//console.log(content)
//  })
