# Media sources

The scraper is focused on mass medias. Here, you can see all the information regarding to the medias.

## <a id="id"></a>Media id

Internally, we always use an ID to identify the media. The following table shows the ID and name of each.

|id             |Name
|:--------------|-----------------------------------
|abc            |[ABC](http://abc.es)
|ara            |[Ara.cat](http://ara.cat)
|elconfidencial |[El Confidencial](http://elconfidencial.com)
|eldiario       |[El Diario](http://eldiario.es)
|elespanol      |[El Español](http://elespanol.com)
|elmundo        |[El Mundo](http://elmundo.es)
|elpais         |[El País](http://elpais.com)
|elperiodico    |[El Periódico](http://elperiodico.com)
|esdiario       |[ESdiario](http://esdiario.com)
|europapress    |[Europa Press](http://europapress.es)
|huffingtonpost |[Huffington Post](http://huffingtonpost.es)
|lainformacion  |[La Informacion](http://lainformacion.com)
|larazon        |[La Razon](http://larazon.es)
|lavanguardia   |[La Vanguardia](http://lavanguardia.com)
|lavozdegalicia |[La Voz de Galicia](http://lavozdegalicia.es)
|libertaddigital|[Libertad Digital](http://libertaddigital.com)
|naciodigital   |[Nació Digital](http://naciodigital.cat)
|okdiario       |[OK diario](http://okdiario.com)
|publico        |[Público](http://publico.es)



## Parser

The following table shows a list of tested mass media webpages. The parser may work in more media than the indicated below.

* A cell in blank means that nothing is retrieved.
* "FAIL" means that a wrong value is retrieved.
* "OK" means that a valid value is retrieved.

|MEDIA          |title|image|html |source|date|ld+json|
|:--------------|:----|:----|:----|:-----|:---|:------|
|abc            |OK   |OK   |OK(1)|OK(3) |OK  |YES    |
|ara            |OK   |OK   |OK(1)|      |OK  |YES    |
|elconfidencial |OK   |OK   |OK(1)|OK(3) |OK  |YES    |
|eldiario       |OK   |OK   |OK(1)|OK(3) |OK  |YES    |
|elespanol      |OK   |OK   |OK(1)|OK(3) |OK  |YES    |
|elmundo        |OK   |OK   |OK(1)|OK(3) |OK  |NO     |
|elpais         |OK   |OK   |OK(1)|OK(3) |OK  |NO     |
|elperiodico    |OK   |OK   |OK(1)|OK(2) |OK  |YES    |
|esdiario       |OK   |OK   |OK(1)|OK(3) |OK  |NO     |
|europapress    |OK   |OK   |OK(1)|OK(3) |OK  |YES    |
|huffingtonpost |OK   |OK   |OK(1)|OK(3) |OK  |YES    |
|lainformacion  |OK   |OK   |OK(1)|OK(3) |OK  |YES    |
|larazon        |OK   |OK   |OK(1)|OK(3) |    |NO     |
|lavanguardia   |OK   |OK   |OK(1)|OK(3) |OK  |NO     |
|lavozdegalicia |OK   |OK   |OK(1)|OK(3) |OK  |YES    |
|libertaddigital|OK   |FAIL |OK(1)|OK(3) |OK  |NO     |
|naciodigital   |OK   |OK   |     |OK(3) |N/A |NO     |
|okdiario       |OK   |OK   |OK(1)|OK(2) |OK  |NO     |
|publico        |OK   |OK   |OK(1)|OK(3) |    |NO     |

### Notes

* (1). Not deeply checked. Only checked if the first 80 characters are relevant
* (2). All authors appear as single string. Not an array
* (3). Not tested for multi-author.

### Links used for testing

These are the news source used for this test

* http://www.abc.es/espana/abci-policia-entrega-juez-pendrive-sobre-caso-pujol-aparecio-ordenando-unos-cajones-201702091240_noticia.html
* http://www.ara.cat/societat/Quatre-controlats-Catalunya-aquesta-tecnica_0_1741625927.html
* http://www.elconfidencial.com/espana/2017-02-09/vistalegricidio-batalla-final-podemos-iglesias-errejon_1328697/
* http://www.eldiario.es/politica/Policia-PP-despues-cuestionar-sentencias_0_610688927.html
* http://www.elespanol.com/espana/20170213/193480960_0.html
* http://www.elmundo.es/espana/2017/02/09/589c3833e5fdeabc7a8b460b.html
* http://cultura.elpais.com/cultura/2017/02/08/actualidad/1486573775_868895.html
* http://www.elperiodico.com/es/noticias/politica/ana-mato-comparecer-juicio-gurtel-declarar-5796132
* http://www.esdiario.com/655099781/Garcia-desarma-a-Herrera-ante-la-divertida-mirada-de-Gabilondo-y-Del-Olmo.html
* http://www.europapress.es/sociedad/noticia-papa-garantiza-severidad-extrema-contra-pederastas-cura-puede-llegar-causar-tanto-mal-20170213142414.html
* http://www.huffingtonpost.es/2017/02/13/fernandez-ordonez_n_14718872.html
* http://www.lainformacion.com/politica/partidos/Gestora-PSOE-pablismo-leninismo-Podemos-Va_0_999200280.html
* http://www.larazon.es/espana/una-condena-del-supremo-a-homs-arrastraria-a-artur-mas-GJ14480710
* http://www.lavanguardia.com/economia/20170209/414177052262/alemania-exportaciones-superavit-2016-trump.html
* http://www.lavozdegalicia.es/noticia/espana/2017/02/13/juez-atribuye-presidente-murcia-delitos-fraude-cohecho/00031486982881679285690.htm
* http://www.libertaddigital.com/espana/politica/2017-02-13/rajoy-sobre-la-tension-entre-cospedal-y-santamaria-por-que-tengo-que-cambiarlas-1276592588/
* http://www.naciodigital.cat/noticia/125316/govern/pot/fer/millorar/acollida/refugiats
* https://okdiario.com/espana/2017/02/13/iglesias-aplica-lista-cremallera-relega-errejon-5o-puesto-del-consejo-ciudadano-748821
* http://www.publico.es/politica/iglesias-errejon-debe-primera-linea.html
         |