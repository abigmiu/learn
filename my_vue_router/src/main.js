import Vue from 'vue'
import App from './App.vue'
import VueRouter from '@/router/index'
Vue.use(VueRouter)
import A from '@/components/A.vue'
import B from '@/components/B.vue'
import AA from '@/components/AA.vue'
const router = new VueRouter([
    {
        path: '/a',
        component: A,
        children: [
            {
                path: '/a/a',
                component: AA,
            }
        ]
    },
    {
        path: '/b',
        component: B
    }
])
Vue.config.productionTip = false


new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
