const extractBodyObjectFromDom = require('./parseDom').getBodyObject
const extractBodyTextFromDom = require('./parseDom').getBodyText
const extractMetadataFromDom = require('./parseDom').getMetadata
const extractJsonFromDom = require('./parseDom').getJson

const extractMetadataFromJson = require('./parseJson').getMetadata

const mergeMetadata = require('./mergeMetadata')

module.exports = function parse ($) {
  const bodyObject = extractBodyObjectFromDom($)
  const bodyText = extractBodyTextFromDom($)
  const metadata1 = extractMetadataFromDom($)

  const metadata2 = extractMetadataFromJson(extractJsonFromDom($))

  return {
    body: {
      text: bodyText,
      object: bodyObject
    },
    metadata: mergeMetadata(metadata1, metadata2)
  }
}
