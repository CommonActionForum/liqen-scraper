const url = require('url')
const downloadArticle = require('../src/downloadArticle')
/**
 * Test a list of titles of diverse medias
 */

// The list of articles
const uris = [
  'http://www.abc.es/espana/abci-policia-entrega-juez-pendrive-sobre-caso-pujol-aparecio-ordenando-unos-cajones-201702091240_noticia.html',
  'http://www.ara.cat/societat/Quatre-controlats-Catalunya-aquesta-tecnica_0_1741625927.html',
  'http://www.elconfidencial.com/espana/2017-02-09/vistalegricidio-batalla-final-podemos-iglesias-errejon_1328697/',
  'http://www.eldiario.es/politica/Policia-PP-despues-cuestionar-sentencias_0_610688927.html',
  'http://www.elespanol.com/espana/20170213/193480960_0.html',
  'http://www.elmundo.es/espana/2017/02/09/589c3833e5fdeabc7a8b460b.html',
  'http://cultura.elpais.com/cultura/2017/02/08/actualidad/1486573775_868895.html',
  'http://www.elperiodico.com/es/noticias/politica/ana-mato-comparecer-juicio-gurtel-declarar-5796132',
  'http://www.esdiario.com/655099781/Garcia-desarma-a-Herrera-ante-la-divertida-mirada-de-Gabilondo-y-Del-Olmo.html',
  'http://www.europapress.es/sociedad/noticia-papa-garantiza-severidad-extrema-contra-pederastas-cura-puede-llegar-causar-tanto-mal-20170213142414.html',
  'http://www.huffingtonpost.es/2017/02/13/fernandez-ordonez_n_14718872.html',
  'http://www.lainformacion.com/politica/partidos/Gestora-PSOE-pablismo-leninismo-Podemos-Va_0_999200280.html',
  'http://www.larazon.es/espana/una-condena-del-supremo-a-homs-arrastraria-a-artur-mas-GJ14480710',
  'http://www.lavanguardia.com/economia/20170209/414177052262/alemania-exportaciones-superavit-2016-trump.html',
  'http://www.lavozdegalicia.es/noticia/espana/2017/02/13/juez-atribuye-presidente-murcia-delitos-fraude-cohecho/00031486982881679285690.htm',
  'http://www.libertaddigital.com/espana/politica/2017-02-13/rajoy-sobre-la-tension-entre-cospedal-y-santamaria-por-que-tengo-que-cambiarlas-1276592588/',
  'http://www.naciodigital.cat/noticia/125316/govern/pot/fer/millorar/acollida/refugiats',
  'https://okdiario.com/espana/2017/02/13/iglesias-aplica-lista-cremallera-relega-errejon-5o-puesto-del-consejo-ciudadano-748821',
  'http://www.publico.es/politica/iglesias-errejon-debe-primera-linea.html'
]

// From list of URIs to list of Promises
const p = uris
  .map(uri => downloadArticle(uri)
    .then(article => {
      console.log(uri)
      console.log('title: %s', article.title.slice(0, 80))
      console.log('image: %s', url.resolve(uri, article.image))
      console.log('html:  %s', article.html.slice(0, 80))
      console.log()
      return ''
    })
  )

console.log()

Promise.all(p)
  .then(() => { console.log('parsing finished') })
  .catch(err => console.log(err))
