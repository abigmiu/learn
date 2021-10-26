export let _Vue = null

export default function install(Vue) {
    _Vue = Vue
    _Vue.mixin({
        beforeCreate() {
            if (this.$options.router) {
                this._routerRoot = this
                this._router = this.$options.router
                this._router.init(this)
            } else {
                this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
            }
        }
    })
}
