# `googleSearch(term: string, options: object) => Promise<Object>`

The `liqen-scrapper` relies on Google Search to get lists of relevant news articles via the `advancedSearch()` function.

It needs some configuration to perform the search properly.

1. Get an API key from Google.
2. Create a Search Engine.

## Get an API key from Google

First, you have to obtain an API key from Google Developer Console. Go to [https://console.developers.google.com/apis/credentials](https://console.developers.google.com/apis/credentials) and create a new Key.

## Create a Search Engine

The scrapper uses a Google Search Engine, but you have to create the Search Engine itself using the services provided by Google.

Go to [https://cse.google.com/](https://cse.google.com/) and create a new one. When creating it, be aware that it allows searching on the sites you want to.

## Resources

- [Google APIs Explorer to try the Search API](https://developers.google.com/apis-explorer/#p/customsearch/v1/search.cse.list)
- [Google Custom Search API docs](https://developers.google.com/custom-search/json-api/v1/overview)
- [Google APIs Node.js client](https://github.com/google/google-api-nodejs-client/)
