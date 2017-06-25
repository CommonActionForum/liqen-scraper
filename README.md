[![Build Status](https://travis-ci.org/CommonActionForum/liqen-scraper.svg?branch=master)](https://travis-ci.org/CommonActionForum/liqen-scraper)
[![Coverage Status](https://coveralls.io/repos/github/CommonActionForum/liqen-scraper/badge.svg?branch=master)](https://coveralls.io/github/CommonActionForum/liqen-scraper?branch=master)

# Liqen Scrapper 2

Find news and get the relevant information of them.

This project uses

1. Google Custom Search to search into the medias websites.
2. Scraping techniques to extract the content of an article.

## Usage

This package includes 2 functions that can be used together or separately:

- `googleSearch(term, options) => Promise<Object>` to perform a Google Search
- `downloadArticle(uri) => Promise<Object>` to parse an article

## Examples

### Using only `googleSearch`

```js
const { googleSearch } = require('liqen-scrapper')

const options = {
  apiKey: 'MY_GOOGLE_API_KEY',
  cx: 'MY_CX'
}

googleSearch('climate change', options)
  .then(result => result.items)
  .then(items => items.forEach(item => {
    console.log(item.title)
    console.log(item.link)
  }))
```

### Using only `downloadArticle`

```js
const { downloadArticle } = require('liqen-scrapper')

  .then(article => {
    console.log(article.metadata.title)
    console.log(article.body.html.slice(0, 80))
    downloadArticle('http://cultura.elpais.com/cultura/2017/02/08/actualidad/1486573775_868895.html')
  })
```

### Using both functions together

```js
const { googleSearch, downloadArticle } = require('liqen-scrapper')
const options = {
  apiKey: 'MY_GOOGLE_API_KEY',
  cx: 'MY_CX'
}
const promiseOfArticles = googleSearch('climate change', options)
  .then(result => result.items.map(item => item.link))
  .then(links => links.map(downloadArticle))

Promise.all(promiseOfArticles)
  .then(articles => articles.map(article => article.body.html))
  .then(bodies => {
    bodies.forEach(body => {
      console.log(body.slice(0,80))
    })
  })
```

## docs

See `/docs` directory for more docs
