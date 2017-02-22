# Liqen Scrapper

Find news and get the relevant information of them.

This project uses

1. Google Custom Search to search into the medias websites.
2. Scraping techniques to extract the content of an article.

## API

This package includes 5 functions:

- `googleSearch(terms, options) => Promise<Object[]>)`
- `basicSearch(terms, options) => Promise<Object[]>)`
- `advancedSearch(term, options) => Promise<Object>`
- `downloadArticle(uri) => Promise<Object>`
- `getContent(uri) => Promise<string>`


### `googleSearch(terms, options) => Promise<Object[]>`

Alias of `basicSearch(terms, options) => Promise<Object[]>)`.

### `basicSearch(terms, options) => Promise<Object[]>)`

Perform a Google search of certain terms. Then return a promise of an array of objects like this:

```js
Item = {
  title: string,
  link: string
}
```

For each term, the search will return a maximum of 10 items.

**Note**. Google API Key and Custom Search Engine ID are needed to perform this operation. See *Non technical requisites* section for more info.

### `advancedSearch(term, options) => Promise<Object>`

Perform a Google search of a single term. It allows more options than the `basicSearch` function.

#### Arguments

1. `term` *(string)*: A term to look for.
2. `options` *(optional object)*: Options for the Search.

The options object can have the following properties:

- `startDate` *(string)*. The start date of the search in `YYYY-MM-DD` format. Default: `2016-01-01`.
- `endDate` *(string)*. The end date of the search in `YYYY-MM-DD` format. Default: the current date.
- `medias` *(array)*. Array of strings. Limit the search to some specified medias. Default: `['elpais']`
- `index` *(number)*. Index of the 1st result to be returned. Default: `0`

#### Returns

(`Promise<Object>`): An promise of object with the result of the search. This object includes a collection of items (the result itself) and extra convenient information such as counters.

The properties included in this object are:

- `items`. An array of results. Each element of the array is a JavaScript object with article data. Each object has the following properties.
  - `title`. The title of the article
  - `link`. A link of the original source of the article
  - `date`. The publishing date of the article
  - `image`. Header image of the article URI
  - `author`. Author of the article
- `searchInformation`
  - `totalResults`. Total amount of results



### `downloadArticle(uri: string) => Promise<Article>`

Given a URL of an article, get some information possible of it. Return a promise of `Article` object.

### `getContent(uri: string) => Promise<string>`

Given a URL of an article, get the HTML content. Return a promise of it.

**Note**. The content returned by this function is the same as the `html` property of the `Article` returned by `downloadArticle`. It is recommended to use that function instead of this.

### The `Article` object

```js
Article = {
  title: string,
  image: string,
  html: string,
  source: string,
  publishedDate: Date
}
```

#### `Article.title: string`

The title of the article

#### `Article.image: string`

The URI of the heading image

#### `Article.html: string`

The HTML content of the article

#### `Article.source: string`

The original source of the article (news agency or author name)

#### `Article.publishedDate: Date`

The publishing date/time of the Article

## Non technical requisites

### Register a Google API

Go to https://console.developers.google.com/apis/credentials and create a new API Key.

### Register a custom search engine

Go to https://cse.google.com/ and register a search engine. Make sure that it accepts the spanish media sites that you want to look into.

You will need the Search Engine ID.

### Set the environmental variables

Set the environmental variables `CX` and `GOOGLE_API_KEY` with the *Search Engine ID* and *API Key* values obtained before.

To do it in bash:

```bash
CX=<Your Search Engine ID>
GOOGLE_API_KEY=<Your Google API Key>
export CX
exporg GOOGLE_API_KEY
```

## List of accepted medias

You can see a list of tested medias in the [MEDIA.md](media.md) file.

## Resources

- [Google APIs Explorer to try the Search API](https://developers.google.com/apis-explorer/#p/customsearch/v1/search.cse.list)
- [Google Custom Search API docs](https://developers.google.com/custom-search/json-api/v1/overview)
- [Google APIs Node.js client](https://github.com/google/google-api-nodejs-client/)

