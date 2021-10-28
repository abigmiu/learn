export let _Vue = null

export default function install(Vue) {
    console.log(123);
    _Vue = Vue
    _Vue.mixin({
        beforeCreate() {
            if (this.$options.router) {
                this._routerRoot = this
                this._router = this.$options.router
                this._router.init(this)
                Vue.util.defineReactive(this, 'route', this._router.history.current)
            } else {
                this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
            }
        }
    })
    Vue.component('router-view', {
        render(h) {
            const component = this.$router.routerMap[this.$router.data.current]
            return h(component)
        }
    })
}
