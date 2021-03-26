const core = require('@actions/core');
const https = require('https');

const newLinearIssueMutation = require('./linear-create-mutation-query');

(async () => {
  try {
    const linearKey = core.getInput('linear-key');
    const linearTeam = core.getInput('linear-team-id');
    const title = core.getInput('title');
    const body = core.getInput('body');

    const mutation = newLinearIssueMutation(title, body, linearTeam)

    const options = {
      hostname: 'https://api.linear.app',
      port: 443,
      path: '/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': linearKey,
        'Content-Length': data.length
      }
    }

    const req = https.request(options, res => {
      console.log(`statusCode: ${res.statusCode}`)

      res.on('data', d => {
        console.log(d)
      })
    })

    req.on('error', error => {
      console.log(error)
      core.setFailed(error)
    })

    req.write(mutation)
    req.end()
    return
  } catch (error) {
    core.setFailed(error.message);
  }
})();