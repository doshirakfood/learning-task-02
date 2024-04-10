import 'virtual:svg-icons-register'

import { createApp } from 'vue'
import { RouterLink } from 'vue-router'
import App from './App.vue'
import { createRouter } from './router'

// components
import SvgIcon from '@components/SvgIcon.vue'
import VButton from '@ui/button/button.vue'
import VField from '@ui/field/field.vue'
import VCheckbox from '@ui/checkbox/checkbox.vue'
import VSelect from '@ui/select/select.vue'
import VQuantitySelector from '@ui/quantity-selector/quantity-selector.vue'
import VRow from '@components/grid-system/row.vue'
import VCol from '@components/grid-system/col.vue'

const router = createRouter()
const app = createApp(App)

app.component('RouterLink', RouterLink)
app.component('SvgIcon', SvgIcon)
app.component('VButton', VButton)
app.component('VField', VField)
app.component('VCheckbox', VCheckbox)
app.component('VSelect', VSelect)
app.component('VQuantitySelector', VQuantitySelector)
app.component('VRow', VRow)
app.component('VCol', VCol)

app.use(router)
app.mount('#app')
