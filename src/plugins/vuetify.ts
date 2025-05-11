// Vuetify
import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.css'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'

/**
 * Vuetifyを初期化する
 */
export const initVuetify = async () => {
  const vuetify = createVuetify({
    components: await import('vuetify/components'),
    directives: await import('vuetify/directives'),
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa,
      },
    },
  })
  return vuetify
}
