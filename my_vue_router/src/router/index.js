import install from './install'
import createMatcher from './create-matcher'
import HashHistory from './history-hash'
export default class VueRouter {
    constructor(options) {
        this._routes = options.routes || []
        this.matcher = createMatcher(this._routes)
        this.mode = 'hash'
        this.history = new HashHistory(this)
    }
    init(Vue){
        const history = this.history
        this.history.transitionTo(history.getCurrentLocation, () => {
            history.setUpListener()
        })
        history.listen((route) => {
            Vue._route = route
        })

    }
}
VueRouter.install = install
