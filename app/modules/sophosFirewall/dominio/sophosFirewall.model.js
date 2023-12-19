const appConfig = require('../../../../config/app')

class SophosFirewallModel {
    
    #host
    #port
    #user
    #pass

    constructor(){
        this.#host = appConfig.sophosFirewallHost
        this.#port = appConfig.sophosFirewallPort
        this.#user = appConfig.sophosFirewallUser
        this.#pass = appConfig.sophosFirewallPass
    }

    getUrl() {
        return `${this.#host}:${this.#port}`
    }
    getUser() {
        return this.#user
    }
    getPassword() {
        return this.#pass
    }
}

module.exports = SophosFirewallModel