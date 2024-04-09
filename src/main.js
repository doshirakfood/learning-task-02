import { createApp } from 'vue'
import { RouterLink } from 'vue-router'
import App from './App.vue'
import { createRouter } from './router'

// components
import SvgIcon from '@components/SvgIcon.vue'
import VButton from '@ui/button/button.vue'

const router = createRouter()
const app = createApp(App)

app.component('RouterLink', RouterLink)
app.component('SvgIcon', SvgIcon)
app.component('VButton', VButton)

app.use(router)
app.mount('#app')
