const { advancedSearch } = require('../index')

advancedSearch('cambio climatico', {index: 200})
  .then(result => {
    console.log(result.searchInformation.totalResults)
    console.log(result.items.length)
  })
