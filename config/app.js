require('dotenv').config()

module.exports = {
  port: process.env.APP_PORT || 3000,
  debug: process.env.APP_DEBUG || false,
  sophosFirewallHost: process.env.SOPHOS_FIREWALL_HOST || '',
  sophosFirewallPort: process.env.SOPHOS_FIREWALL_PORT || '',
  sophosFirewallUser: process.env.SOPHOS_FIREWALL_USER || '',
  sophosFirewallPass: process.env.SOPHOS_FIREWALL_PASS || '',
}