import Vue from 'vue'
import { Input, Table, TableColumn, Form, FormItem, Autocomplete } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(Input)
Vue.use(Autocomplete)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
