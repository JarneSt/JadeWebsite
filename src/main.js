import { createApp } from 'vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import App from './App.vue'
import router from './router'
import store from './store'
import {library} from "@fortawesome/fontawesome-svg-core"
import { fas } from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

library.add(fas);
library.add(far);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(PerfectScrollbar)
    .use(store)
    .use(router)
    .mount('#app')
