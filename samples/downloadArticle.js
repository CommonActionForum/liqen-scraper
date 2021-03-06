const downloadArticle = require('../src/downloadArticle')

// Uncomment  to try one parser
// downloadArticle('http://www.abc.es/espana/abci-policia-entrega-juez-pendrive-sobre-caso-pujol-aparecio-ordenando-unos-cajones-201702091240_noticia.html')
// downloadArticle('http://www.elconfidencial.com/espana/2017-02-09/vistalegricidio-batalla-final-podemos-iglesias-errejon_1328697/')
// downloadArticle('http://www.eldiario.es/politica/Policia-PP-despues-cuestionar-sentencias_0_610688927.html')
// downloadArticle('http://www.elmundo.es/espana/2017/02/09/589c3833e5fdeabc7a8b460b.html')
downloadArticle('http://cultura.elpais.com/cultura/2017/02/08/actualidad/1486573775_868895.html')
// downloadArticle('http://www.elperiodico.com/es/noticias/politica/ana-mato-comparecer-juicio-gurtel-declarar-5796132')
// downloadArticle('http://www.larazon.es/espana/una-condena-del-supremo-a-homs-arrastraria-a-artur-mas-GJ14480710')
// downloadArticle('http://www.lavanguardia.com/economia/20170209/414177052262/alemania-exportaciones-superavit-2016-trump.html')
  .then(content => {
    console.log(content.title.slice(0, 80))
    console.log(content.html.slice(0, 80))
    console.log(content.image.slice(0, 80))
  })
  .catch(reason => {
    console.log(reason)
  })
