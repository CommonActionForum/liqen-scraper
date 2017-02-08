# News parsers

This directory includes all the parsers for different news media. You can follow this document to create a new parser.

## `parser: $ => string`

Each parser is a function that accepts `$`, a cheerio DOM object as an argument. Then it returns a string, the HTML of the article.

```js
module.exports = function ($) {
  return ''
}
```

## A basic parser

Most of news media sites articles are structured in very similar and consistent ways. In this section we are going to make a standard news parser.

Suppose that somewhere in the document we have the following snippet:

```html
<article>
  <header><h1>...</h1></header>
  <div itemprop='articleBody'>
    <p>First paragraph...</p>
    <p>Second paragraph...</p>
    <aside>Some side quote...</aside>
    <p>Third paragraph...</p>
    <h3>Some section</h3>
  </div>
</article>
```

We need to return something like this:

```html
<p>First paragraph...</p>
<p>Second paragraph...</p>
<p>Third paragraph...</p>
<h3>Some section</h3>
```

We need to take the elements inside the `<div itemprop='articleBody'>`, and discard the unnecesary things (like the `aside` element).

First, we select the `<div itemprop='articleBody'>` (common antecestor of the article) and get all the children of it:

```js
$('[itemprop=articleBody]')
  .children()
```

Then perform the operation of removing the `aside` element. Note that we set a whitelist of tags and remove everything else.

```js
$('[itemprop=articleBody]')
  .children()
  .filter(function (i, el) {
    const allowedTags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    return allowedTags.indexOf($(this).prop('tagName').toLowerCase()) !== -1
  })
```

Now, we need to return that list of elements (a cheerio object) as a single string. To perform that transformation we create a new DOM element, append all the elements and return it.

```js
let content = $('<div></div>')

$('[itemprop=articleBody]')
  .children()
  .filter(...)
  .each(function (i, el) {
    $(content.append($(this))
  })

return content.html()
```

## Further reading

* [Cheerio project](https://github.com/cheeriojs/cheerio)
