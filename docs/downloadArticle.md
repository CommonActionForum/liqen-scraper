# `downloadArticle(uri: string) => Promise<Article>`

Given a URL of an article, get some information possible of it. Return a promise of an object with the shape of an `Article`.

An Article is an object with two properties: `body` that represents the body of the article and the `metadata` that represents the invisible parts of an article.

The body is directly parsed from the HTML file of the article. The metadata could be obtained from different sources, like linked files, contents in the `script` tag or from the `meta` tags in the HTML file.

```js
{
  body,
  metadata
}
```

## `body`

This `body` object has the **same information represented in different formats**. It means that the differences among all properties of this `body` property are about formats, not the semantics.

Currently, body has two properties: `object` and `text`.

- `body.object` is a JavaScript object representing the DOM tree.
- `body.html` is a String, the content of the article as is.

```js
{
  body: {
    object,
    html,
  }
}
```

### JavaScript format: `body.object`

The JavaScript object format of the `body.object` property is inspired in projects like [Hyperscript](https://github.com/hyperhype/hyperscript) or [Floki](https://github.com/philss/floki).

We represent each HTML node as:

- If the node is a text, a JS string.
- Otherwise, a JS object with three properties: `name` (string), `attrs` (object where keys are attribute names and values are the values of that attributes) and `children` (array of nodes).

Lets see examples of nodes:

#### Example 1

```html
<p class="headline">Heading</p>
```

```js
{
  name: 'p',
  attrs: {
    class: 'headline'
  },
  children: ['Heading']
}
```

#### Example 2

```html
<p class="regular">
  This is a <strong>heading</strong>
</p>
```

```js
{
  name: 'p',
  attrs: {
    class: 'regular'
  },
  children: [
    '\r\n  This is a',
    {
      name: 'strong',
      attrs: {},
      children: ['heading']
    },
    '\r\n'
  ]
}
```
