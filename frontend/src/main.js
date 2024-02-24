import './index.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from './store';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
// import 'bootstrap/dist/css/bootstrap.css'

// Use plugin with optional defaults


import {
  Button,
  Card,
  Input,
  setConfig,
  frappeRequest,
  resourcesPlugin,
} from 'frappe-ui'

let app = createApp(App)

setConfig('resourceFetcher', frappeRequest)

app.use(router)
app.use(resourcesPlugin)

app.component('Button', Button)
app.component('Card', Card)
app.component('Input', Input)
app.use(store);
app.mount('#app')
app.use(VCalendar, {})

