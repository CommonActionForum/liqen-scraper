# Google Search

The `liqen-scrapper` relies on Google Search to get lists of relevant news articles.

There are two functions that uses Google Search:

- `advancedSearch()`
- `googleSearch()`

Both need some configuration to perform the search properly.

1. Get an API key from Google.
2. Create a Search Engine.

## Get an API key from Google

First, you have to obtain an API key from Google Developer Console. Go to [https://console.developers.google.com/apis/credentials](https://console.developers.google.com/apis/credentials) and create a new Key.

Then, set that value to the `GOOGLE_API_KEY` environmental variable.

## Create a Search Engine

The scrapper uses a Google Search Engine, but you have to create the Search Engine itself using the services provided by Google.

Go to [https://cse.google.com/](https://cse.google.com/) and create a new one. When creating it, be aware that it allows searching on the sites you want to.

After creating the Engine, get the ID of the engine and set that to the `CX` environmental variable.
