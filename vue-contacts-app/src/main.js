import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import i18n from './i18n'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(i18n)
app.mount('#app')
