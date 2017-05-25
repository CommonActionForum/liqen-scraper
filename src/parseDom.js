/** Get the Body of the DOM. Return it as plain JS object */
function getBodyObject ($) {
  const container = getContainer($)

  // Convert the root element into an array
  const children = []
  container
    .children()
    .map((i, el) => {
      children.push(convertToNode($(el)[0]))
    })

  return {
    children: children
      .filter(child => child !== null),
    name: '',
    attrs: {}
  }
}

/** Get the Body of the DOM. Return it as text */
function getBodyHtml ($) {
  return ''
}

/** Get the metadata from the DOM. Return it as object */
function getMetadata ($) {
  return {}
}

/** Get the JSON from the DOM. Return it as object */
function getJson ($) {
  return {}
}

// private
function getContainer ($) {
  const selectors = [
    '[itemprop=articleBody] [itemProp=text]',
    '[itemprop=articleBody]',
    '#cuerpo_noticia',
    '#edi-body',
    '#news-body-center',
    '.cuerpo-articulo > div',
    '.main .cuerpo-noticia',
    '.detalleFullTexto .editorHTML .text',
    '#content .mce-body',
    '#mainentrycontent',
    '[class*="body-text"]',
    '<div></div>'
  ]

  for (let i = 0; i < selectors.length; i++) {
    if ($(selectors[i]).length > 0) {
      return $(selectors[i])
    }
  }
}

// private
// convert a cheerio element into a JS object representing a node
function convertToNode (element) {
  switch (element.type) {
    case 'tag':
      return ['a', 'p', 'strong', 'em', 'b', 'em'].indexOf(element.name) !== -1
           ? {
             name: element.name,
             attrs: filterAttributes(element.name, element.attribs),
             children: element
               .children
               .map(child => convertToNode(child))
               .filter(child => child !== null)
           }
           : null

    case 'text':
      return element.data

    default:
      return '---'
  }
}

// Filter the html attributes
// Return only the relevant ones
function filterAttributes (name, attributes) {
  const filtered = {}

  if (attributes.href) {
    filtered.href = attributes.href
  }

  return filtered
}

module.exports = {
  getBodyObject,
  getBodyHtml,
  getMetadata,
  getJson
}

