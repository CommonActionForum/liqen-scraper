const DEFAULT_ALLOWED_TAGS = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']

/**
 * Filter DOM elements by tag
 *
 * Use with cheerio `$.filter` function:
 *   $(...).filter(tagFilter($))
 *
 * @param $ {object}                      A cheerio DOM object
 * @param allowedTags {array} (optional)  A list of allowed tags.
 *    default value: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
 *
 * @return {function}  Function to be passed to cheerio `$.filter`
 */
module.exports = function tagFilter ($, allowedTags = DEFAULT_ALLOWED_TAGS) {
  return (i, el) => (
    allowedTags.indexOf($(el).prop('tagName').toLowerCase()) !== -1
  )
}
