// Test to call
const googleSearch = require('./src/getNewsList/google')
const getContent = require('./src/getContent/elpais')

// 1. Call Google search
googleSearch('agua', {year: 2016, month: 1, date: 12})
  .then(list => {
  	// 2. Transform the "list of links" into "list of (Promise of) contents"
  	return list.map(i => getContent(i.link))
  })
  .then(promises => {
  	// 3. Get all the content from the array of promises
  	Promise.all(promises).then(contents => {
  	  console.log(contents.join('\n\n'))
  	})
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
