const extractBodyObjectFromDom = require('./parseDom').getBodyObject
const extractBodyHtmlFromDom = require('./parseDom').getBodyHtml
const extractMetadataFromDom = require('./parseDom').getMetadata
const extractJsonFromDom = require('./parseDom').getJson

const extractMetadataFromJson = require('./parseJson').getMetadata

const mergeMetadata = require('./mergeMetadata')

module.exports = function parse ($) {
  const bodyObject = extractBodyObjectFromDom($)
  const bodyHtml = extractBodyHtmlFromDom($)
  const metadata1 = extractMetadataFromDom($)

  const metadata2 = extractMetadataFromJson(extractJsonFromDom($))

  return {
    body: {
      html: bodyHtml,
      object: bodyObject
    },
    metadata: mergeMetadata(metadata1, metadata2)
  }
}
