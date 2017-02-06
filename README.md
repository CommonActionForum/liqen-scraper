# Liqen Scraper

Web scraper for Spanish mass medias.

This project uses

1. Google Custom Search to search into the medias websites.
2. Scraping techniques to extract the content of an article.

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

## Usage

TODO

## List of accepted medias

Media           | News list | Content | Domains
----------------|-----------|---------|--------------
El País         | YES       | YES     | \*.elpais.com

## Create a scraper for more media

TODO

## Resources

- [Google APIs Explorer to try the Search API](https://developers.google.com/apis-explorer/#p/customsearch/v1/search.cse.list)
- [Google Custom Search API docs](https://developers.google.com/custom-search/json-api/v1/overview)
- [Google APIs Node.js client](https://github.com/google/google-api-nodejs-client/)

