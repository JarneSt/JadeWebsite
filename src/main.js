import { createApp } from 'vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import App from './App.vue'
import router from './router'
import store from './store'
import {library} from "@fortawesome/fontawesome-svg-core"
import { fas } from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import Progress from 'vue-progress-scroll'


library.add(fas);
library.add(far);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(Progress)
    .use(store)
    .use(router)
    .mount('#app')
