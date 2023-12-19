const fetch = require('node-fetch')
const https = require('https')
const FormData = require('form-data')
const parseString = require('xml2js').parseString;
const SophosFirewallModel = require("../dominio/sophosFirewall.model")

const sophosFirewall = new SophosFirewallModel()

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const xmlBody = `
  <Request>
    <Login>
      <Username>${sophosFirewall.getUser()}</Username>
      <Password>${sophosFirewall.getPassword()}</Password>
    </Login>
  </Request>
`;

const form = new FormData();
form.append('reqxml', xmlBody);

async function logIn() {
  return fetch(sophosFirewall.getUrl() + '/webconsole/APIController', {
    method: 'POST',
    body: form,
    headers: form.getHeaders(),
    agent: agent
  })
    .then(async response => {
      if (!response.ok) {
        throw new Error(`Error de red: ${response.statusText}`);
      }
      return response.text().then(responseText => {
        const responseParsed = parseResponse(responseText)
        return responseParsed?.Response?.Login?.status
      })
    })
    .catch(error => {
      return error
    })
}

function parseResponse(xml) {
  let parsed
  parseString(xml, { trim: true, explicitArray: false }, (error, result) => {
    parsed = (error) ? undefined : result
  })
  return parsed
}

module.exports = { logIn }