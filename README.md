# Liqen Scrapper

Find news and get the relevant information of them.

This project uses

1. Google Custom Search to search into the medias websites.
2. Scraping techniques to extract the content of an article.

## Usage

This package includes 3 functions

### `googleSearch(terms: string[], options: object) => Promise<Item[]>`

Perform a Google search of certain terms. Then return a promise of an array of `Link` objects:

```js
Item = {
  title: string,
  link: string
}
```

For each term, the search will return a maximum of 10 items.

**Note**. Google API Key and Custom Search Engine ID are needed to perform this operation. See *Non technical requisites* section for more info.

### `downloadArticle(uri: string) => Promise<Article>`

Given a URL of an article, get some information possible of it. Return a promise of `Article` object.

#### `Article.title: string`

The title of the article

#### `Article.image: string`

The URI of the heading image

#### `Article.html: string`

The HTML content of the article

### `getContent(uri: string) => Promise<string>`

Given a URL of an article, get the HTML content. Return a promise of it.

**Note**. The content returned by this function is the same as the `html` property of the `Article` returned by `downloadArticle`. It is recommended to use that functioni instead of this.

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

