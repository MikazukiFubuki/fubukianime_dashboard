// @ts-ignore
import { createApp } from 'vue'

import pinia from './commons/utils/piniaInstance'

import './commons/styles/reset.scss'

import 'animate.css'

// @ts-ignore
import router from './commons/router'
import App from './commons/App.vue'
import zerovWidgets from './commons/shj-widget/es/index'
import './commons/shj-widget/es/style.css'


createApp(App).use(router).use(zerovWidgets).use(pinia).mount('#app')