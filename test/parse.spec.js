/* eslint-env mocha */
import fs from 'fs'
import path from 'path'
import parse from '../src/parse'
import { expect } from 'chai'
import cheerio from 'cheerio'
// Tests for parse.js
// The majority of these tests are integration tests.
// We have to consider splitting into smaller tests if possible

function getFile (name) {
  const p = path.resolve(__dirname, name)
  return fs.readFileSync(p)
}

describe('Parse an "elpais" article', () => {
  // Read the article
  const article = cheerio.load(getFile('support/p1-raw.html'))
  const body = require('./support/p1-body.js')
  const metadata = require('./support/p1-metadata.js')

  // Pass into the parser
  const result = parse(article)
  // Retrieve the results
  it('should return a valid result', () => {
    expect(result.body).to.deep.equal(body)
    expect(result.metadata).to.deep.equal(metadata)
  })
})
