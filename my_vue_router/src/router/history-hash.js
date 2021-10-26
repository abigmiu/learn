import History from "./history-base";

export default class HashHistory extends History {
    constructor(router) {
        super(router)
        ensuerSlash()
    }

    setUpListener() {
        window.addEventListener('hashchange', () => {
            this.transitionTo(this.getCurrentLocation())
        })
    }

    getCurrentLocation() {
        let href = window.location.href
        const index = href.indexOf('#')
        if (index < 0) return ''
        href = href.slice(index + 1)
        return href
    }
}


function ensuerSlash() {
    if (window.location.hash) return
    window.location.hash = '/'
}
