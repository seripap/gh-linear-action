const core = require('@actions/core');
const fetch = require('node-fetch');

const newLinearIssueMutation = require('./linear-create-mutation-query');

(async () => {
  try {
    const linearKey = core.getInput('linear-key');
    const linearTeam = core.getInput('linear-team-id');
    const title = core.getInput('title');
    const body = core.getInput('body');
    const url = core.getInput('url');

    const mutation = newLinearIssueMutation(title, body, linearTeam, url)

    fetch('https://api.linear.app/graphql', {
            method: 'post',
            body:    JSON.stringify(body),
            headers: { 
              'Content-Type': 'application/json' ,
              'Authorization': linearKey,
            },
        })
        .then(res => res.json())
        .then(json => console.log(json));
    return
  } catch (error) {
    core.setFailed(error.message);
  }
})();