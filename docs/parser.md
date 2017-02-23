# Parser

The `liqen-scrapper` can parse some news articles

There are two functions that uses the parser:

- `downloadArticle()`
- `getContent()`

## Prior art

Before this version, the parser worked in a different way depending on the media. So, instead of having one parser, we had 6 different parsers, one per domain. This way of thinking has several caveats:

- Lots of repeated code. Some media are structured in similar ways and doesn't need specific ways to retrieve information.
- Lack of scalability. The code cannot be extended to new media.

## General behavior

To solve that problems, we make a more general Parser. As you can see in `/src/parseArticle.js`, it first tries to get information from the `LD+JSON` object.

The `$` argument that you will see in all function calls (including that in the exported `parseArticle`), is a Cheerio object with the DOM of the whole page already loaded.

```js
module.exports = function parseArticle ($, options) {
  const jsonTag = $('script[type="application/ld+json"]')

  const parsedJson = jsonTag.length > 0
                   ? parseJson(jsonTag.html())
                   : {}
  ...
}
```

Then, it calls different functions for each property to be retrieved.

```js
module.exports = function parseArticle ($, options) {
  ...

  const parsedHtml = {
    title: title($),
    image: image($),
    html: html($),
    source: source($),
    publishedDate: publishedDate($)
  }
}
```

Lastly, we merge the JSON and HTML data.

```js
module.exports = function parseArticle ($, options) {
  ...
  return Object.assign({json: parsedJson}, parsedHtml, parsedJson)
}
```

You see that `parseArticle` has a second `options` argument. Let's discuss a bit about it

## The second argument

The second argument, is called `options`. The idea of this is to change the default behaviour of the parser in certain scenarios.

Currently, that argument is completely ignored, but a lot of data can be passed through it. For example:

- `media`. The media ID. Maybe some specific media has specific ways to retrieve some data.
