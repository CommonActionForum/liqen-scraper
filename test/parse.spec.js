/* eslint-env mocha */
import parse from '../src/parse'
import { expect } from 'chai'
import $ from 'cheerio'
// Tests for parse.js
// The majority of these tests are integration tests.
// We have to consider splitting into smaller tests if possible

describe('Parse an "elpais" article', () => {
  // Read the article
  const article = $('<div></div>')
  // Pass into the parser
  const result = parse(article)
  // Retrieve the results
  it('should return a valid result', () => {
    expect(result.body).to.deep.equal({text: '', object: {}})
    expect(result.metadata).to.deep.equal({})
  })
})
