# API

- [`advancedSearch(term, [options])`](#advancedSearch)
- [`downloadArticle(uri)`](#downloadArticle)

## <a id='advancedSearch'></a>[`advancedSearch(term, [ options ])`](#advancedSearch)

Perform a Google search of a single term.

### Arguments

1. `term` *(string)*: A term to look for.
2. `options` *(optional object)*: Options for the Search.

The `options` object can have the following properties:

- `startDate` *(Date | String | Number) optional. Default: `'2016-01-01'`*. The start date limit of the search.
- `endDate` *(Date | String | Number) optional. Default: `'2016-12-31'`*. The end date limit of the search.
- `media` *(string) optional*. A media ID. If specified, the search will be performed only in that media. Otherwise, will be performed in all available media. [See a list the media IDs](Media.md#id). 
- `index` *(number) optional. Default: `1`*. Index of the 1st result to be returned. It must be a positive number.

Both *date* arguments (`startDate` and `endDate`) will be parsed using the [*parse* function of the *date-fns* package](https://date-fns.org/docs/parse). If a *time* (hours, minutes or seconds) are given, they will be ignored.

### Returns

(`Promise<Object>`): A promise of object with the result of the search. This object includes a collection of items (the result itself) and extra convenient information such as counters.

The properties included in this object are:

- `items`. An array of results. Each element of the array is a JavaScript object with article data. Each object has the following properties.
   - `title`. The title of the article
   - `link`. A link of the original source of the article
   - `date`. The publishing date of the article
   - `image`. Header image of the article URI
   - `author`. Author of the article
- `searchInformation`. An object with extra information
   - `totalResults`. Total amount of results

### Example

Display the title of 10 news about "cambio climático"

```js
advancedSearch('cambio climático')
  .then(result => {
    console.log('News retrieved', result.searchInformation.totalResults)

    result.items.forEach(item => {
      console.log('Title', item.title)
    })
  })
```

### Further reading

* [How Google Search works in this package](googleSearch.md)

<hr>

## <a id='downloadArticle'></a>[`downloadArticle(uri)`](#downloadArticle)

Download an article and parse it.

### Arguments

1. `uri` *(string)*. The URI of the article to be downloaded and parsed.

### Returns

(`Promise<Object>`): A promise of object with information of the article.

The properties included in this object are:

- `title`. The title of the article
- `image`. The URI of the heading image of the article
- `publishedDate`. The publishing date of the article
- `html`. The HTML content of the article
- `json`. Raw LD+JSON object (parsed) if available

### Further reading

* [How the parser works](parser.md)

<hr>

## <a id='getContent'></a>[`getContent(uri)`](#getContent)

Return the HTML body of an article.

### Arguments

1. `uri` *(string)*. The URI of the article to be downloaded and parsed.

### Returns

(`Promise<string>`): A promise of the HTML content. This function returns the same thing as the `html` property of the returned object in [`downloadArticle(uri)`](#downloadArticle)