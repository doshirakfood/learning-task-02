import 'virtual:svg-icons-register'

import { createApp } from 'vue'
import { RouterLink } from 'vue-router'
import App from './App.vue'
import { createRouter } from './router'
import Store from './store'

// components
import SvgIcon from '@components/SvgIcon.vue'
import VButton from '@ui/button/button.vue'
import VField from '@ui/field/field.vue'
import VTextarea from '@ui/textarea/textarea.vue'
import VCheckbox from '@ui/checkbox/checkbox.vue'
import VRadio from '@ui/radio/radio.vue'
import VSelect from '@ui/select/select.vue'
import VQuantitySelector from '@ui/quantity-selector/quantity-selector.vue'
import VDynamicForm from '@ui/dynamic-form/dynamic-form.vue'
import VRow from '@components/grid-system/row.vue'
import VCol from '@components/grid-system/col.vue'

// elements
import Logotype from '@components/logotype/logotype.vue'
import Price from '@components/price/price.vue'
import Product from '@components/product/product.vue'
import TagGroup from '@components/tag-group/tag-group.vue'
import StarRating from '@components/star-rating/star-rating.vue'

const router = createRouter()
const store = Store
const app = createApp(App)

// components
app.component('RouterLink', RouterLink)
app.component('SvgIcon', SvgIcon)
app.component('VButton', VButton)
app.component('VField', VField)
app.component('VTextarea', VTextarea)
app.component('VCheckbox', VCheckbox)
app.component('VRadio', VRadio)
app.component('VSelect', VSelect)
app.component('VQuantitySelector', VQuantitySelector)
app.component('VDynamicForm', VDynamicForm)
app.component('VRow', VRow)
app.component('VCol', VCol)
// elements
app.component('Logotype', Logotype)
app.component('Price', Price)
app.component('Product', Product)
app.component('TagGroup', TagGroup)
app.component('StarRating', StarRating)

app.use(router)
app.use(store)
app.mount('#app')
