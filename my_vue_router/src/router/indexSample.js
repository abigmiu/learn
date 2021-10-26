let _Vue = null
export default class MyVueRouter {
    static install(Vue) {
        if (MyVueRouter.install.installed) return
        MyVueRouter.install.installed = true

        _Vue = Vue
        _Vue.mixin({
            beforeCreate() {
                if (this.$options.router) {
                    _Vue.prototype.$router = this.$options.router
                }
            }
        })

    }

    constructor(options) {
        this.options = options

        this.routerMap = {}

        this.data = _Vue.observable({
            current: '/'
        })
    }

    /**
     * 解析路由规则
     */
    createRouterMap() {
        this.options.router.forEach((item) => {
            this.routerMap[item.path] = item.component
        })
    }

    /**
     * router-link 和 router-view 组件
     */
    initComponents(Vue) {
        Vue.component('router-link', {
            props: {
                to: String
            },
            template: `<a :href="to"><slot></slot></a>`,
        })

        Vue.component('router-view', {
            render(h) {
                const component = this.$router.routerMap[this.$router.data.current]
                return h(component)
            }
        })
    }

    initEvent() {
        window.addEventListener('popstate', () => {
            this.data.current = window.location.pathname
        })
    }

    init() {
        this.createRouterMap()
        this.initComponents(_Vue)
        this.initEvent()
    }
}
