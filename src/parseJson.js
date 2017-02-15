/**
 * Parses a json text
 *
 * @param text        The JSON text
 * @return {Article}  The information of the article
 */
module.exports = function parseJson (text) {
  try {
    const obj = JSON.parse(text)

    const image = obj.image.url
    const source = obj.author.name
    const title = obj.headline
    const publishedDate = new Date(obj.datePublished || obj.date)

    return {
      image,
      source,
      title,
      publishedDate,
      json: obj
    }
  } catch (e) {
    return {}
  }
}
