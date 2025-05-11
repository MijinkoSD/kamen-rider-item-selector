// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

/**
 * Vuetifyを初期化する
 */
export const initVuetify = () => {
  const vuetify = createVuetify({
    components,
    directives,
  })
  return vuetify
}
