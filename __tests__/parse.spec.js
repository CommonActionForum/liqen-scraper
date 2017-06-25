/* eslint-env jest */
import fs from 'fs'
import path from 'path'
import parse from '../src/parse'
import cheerio from 'cheerio'
// Tests for parse.js
// The majority of these tests are integration tests.
// We have to consider splitting into smaller tests if possible

function getFile (name) {
  const p = path.resolve(__dirname, name)
  return fs.readFileSync(p)
}

describe('The parser', () => {
  const medias = [
    'abc',
    'ara',
    'elconfidencial',
    'eldiario',
    'elmundo',
    'elpais',
    'elperiodico',
    'esdiario',
    'europapress',
    'huffpost',
    'lainformacion',
    'larazon',
    'lavanguardia',
    'lavozdegalicia',
    'libertaddigital',
    'naciodigital',
    'okdiario',
    'publico'
  ]

  medias.forEach(media => {
    it(`parses an ${media} article`, () => {
      // Read the article
      const article = cheerio.load(getFile(`__html__/${media}.html`))
      const result = parse(article)

      // Retrieve the results
      expect(result).toMatchSnapshot()
    })
  })
})
