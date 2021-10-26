import createRoute from "./create-route";

export default class History {
    constructor(router) {
        this.router = router
        this.current = createRoute(null, '/')
        this.cb = null
    }

    listen(cb) {
        this.cb = cb
    }

    transitionTo(path, onComplete) {
        this.current = this.router.matcher.match(path)
        onComplete && onComplete()
    }
}
