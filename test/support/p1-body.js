module.exports = {
  text: [
    '<p class="IDE02TXTGENERALCAP6">Primer parrafo <a href="http://localhost/1" target="_blank"><em>con enlace</em></a> en medio.</p>',
    '<p class="IDE02TXTGENERALSANGRIA">Segundo párrafo hehehehehehe</p>',
    '<p class="IDE02TXTGENERALSANGRIA">Tercer párrafo incluyendo un link, <a href="http://localhost/2">una suerte de reacción y de orgullo.</a></p>',
    '<p class="IDE02TXTGENERALSANGRIA">Cuarto párrafo <em>con itálicas</em>. Que sigue, sigue y “sigue”.</p>',
    '<p class="IDE02TXTGENERALSANGRIA">Quinto —párrafo—</p>',
    '<p class="IDE02TXTGENERALSANGRIA">Sexto</p>',
    '<p class="IDE02TXTGENERALSANGRIA">Septimo, <em>1</em>, <em>2</em>, <em>3</em>texto <em>4</em>cosa <em>5</em> o <em>6</em>.</p>'
  ].join(''),
  object: {
    name: '',
    attrs: {},
    children: [
      {
        name: 'p',
        attrs: {},
        children: [
          'Primer parrafo ',
          {
            name: 'a',
            attrs: {
              href: 'http://localhost/1'
            },
            children: [
              {
                name: 'em',
                attrs: {},
                children: [
                  'con enlace'
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'p',
        attrs: {},
        children: [
          'Segundo párrafo hehehehehehe'
        ]
      },
      {
        name: 'p',
        attrs: {},
        children: [
          'Tercer párrafo incluyendo un link, ',
          {
            name: 'a',
            attrs: {
              href: 'http://localhost/2',
              children: [
                'una suerte de reacción y de orgullo.'
              ]
            }
          }
        ]
      },
      {
        name: 'p',
        attrs: {},
        children: [
          'Cuarto párrafo ',
          {
            name: 'em',
            attrs: {},
            children: [
              'con itálicas'
            ]
          },
          '. Que sigue, sigue y “sigue”.'
        ]
      },
      {
        name: 'p',
        attrs: {},
        children: [
          'Quinto —párrafo—'
        ]
      },
      {
        name: 'p',
        attrs: {},
        children: [
          'Sexto'
        ]
      },
      {
        name: 'p',
        attrs: {},
        children: [
          'Septimo, ',
          {
            name: 'em',
            attrs: {},
            children: ['1']
          },
          ', ',
          {
            name: 'em',
            attrs: {},
            children: ['2']
          },
          ', ',
          {
            name: 'em',
            attrs: {},
            children: ['3']
          },
          'texto ',
          {
            name: 'em',
            attrs: {},
            children: ['4']
          },
          'cosa ',
          {
            name: 'em',
            attrs: {},
            children: ['5']
          },
          ' o ',
          {
            name: 'em',
            attrs: {},
            children: ['6']
          },
          '.'
        ]
      }
    ]
  }
}
