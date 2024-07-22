import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Masa Wiki",
  description: "All Masa's Mods, All In One Place",
  base: '/Masa-Wiki/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Mods',
        items: [
          { text: 'MaLiLib', link: '/'},
          { text: 'Litematica', link: '/litematica/' },
          { text: 'Tweakeroo', link: '/' },
          { text: 'Mini HUD', link: '/' },
          { text: 'Item Scroller', link: '/' },
        ]
      }
    ],

    logo: '/logos/logo.png',

    sidebar: {
      'malilib/': [
        { text: 'MaLiLib',
          items: [
            { text: 'Configuration',
              base: 'malilib/configuration/',
              items: [
                { text: 'Generic', link: 'generic.md'}
              ]
            }
          ]
        },
      ],
      'litematica/': [
        { text: 'Litematica',
          items: [
            {text: 'The Basics',
              base: 'litematica/the-basics/',
              items: [
                { text: 'Creating Schematics', link: 'creating-schematics' },
                { text: 'Saving Schematics', link: 'saving-schematics' },
                { text: 'Loading Schematics', link: 'loading-schematics' },
                { text: 'Placing Schematics', link: 'placing-schematics' },
                { text: 'Pasting Schematics', link: 'pasting-schematics' },
                { text: 'Downloading Schematics', link: 'downloading-schematics' }
              ]
            },
            {text: 'Advanced Features',
              base: 'litematica/advanced-features/',
              items: [
                { text: 'Easy Place', link: 'easy-place' },
                { text: 'Material List', link: 'material-list' },
                { text: 'Multi-Region Selections', link: 'multi-region-selections' },
                { text: 'Editing Schematics', link: 'editing-schematics' }
              ]
            },
            { text: 'Configuration',
              base: 'litematica/configuration/',
              collapsed: false,
              items: [
                { text: 'Generic', link: 'generic' },
                { text: 'Info Overlays', link: 'info-overlays' },
                { text: 'Visuals', link: 'visuals' },
                { text: 'Colors', link: 'colors' },
                { text: 'Hotkeys', link: 'hotkeys' },
                { text: 'Render Layers', link: 'render-layers' }
              ]
            },
            { text: 'Frequently Asked Questions', link: 'frequently-asked-questions' }
          ]
        }
      ],
      'tweakeroo/': [
        { text: 'Tweakeroo',
          items: [
            { text: 'Configuration',
              base: 'tweakeroo/configuration/',
              items: [
                { text: 'Generic', link: 'generic.md'},
                { text: 'Fixes', link: 'fixes.md'},
                { text: 'Lists', link: 'lists.md'},
                { text: 'Tweaks', link: 'tweaks.md'},
                { text: 'Hotkeys', link: 'hotkeys.md'},
                { text: 'Yeets', link: 'yeets.md'}
              ]
            }
          ]
        },
      ],
      'minihud/': [
        { text: 'Mini HUD',
          items: [
            { text: 'Configuration',
              base: 'minihud/configuration/',
              items: [
                { text: 'Generic', link: 'generic.md'},
                { text: 'Colors', link: 'colors.md'},
                { text: 'Info Lines', link: 'info-lines.md'},
                { text: 'Structures', link: 'structures.md'},
                { text: 'Renderers', link: 'renderers.md'},
                { text: 'Shapes', link: 'shapes.md'}
              ]
            }
          ]
        },
      ],
      'item-scroller/': [
        { text: 'Item Scroller',
          items: [
            { text: 'Configuration',
              base: 'item-scroller/configuration/',
              items: [
                { text: 'Generic', link: 'generic.md'},
                { text: 'Toggles', link: 'toggles.md'},
                { text: 'Hotkeys', link: 'hotkeys.md'}
              ]
            }
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maruohon' }
    ]
  }
})
