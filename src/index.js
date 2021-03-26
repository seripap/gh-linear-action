const core = require('@actions/core');
const fetch = require('node-fetch');

const newLinearIssueMutation = require('./linear-create-mutation-query');

function checkStatus(res) {
  if (res.ok) { // res.status >= 200 && res.status < 300
        return res.json();
    } else {
        throw core.setFailed(res.statusText);
    }
}

(async () => {
    const linearKey = core.getInput('linear-key');
    const linearTeam = core.getInput('linear-team-id');
    const title = core.getInput('title');
    const body = core.getInput('body');
    const url = core.getInput('url');

    const mutation = newLinearIssueMutation(title, body, linearTeam, url)

    fetch('https://api.linear.app/graphql', {
            method: 'post',
            body:    JSON.stringify(mutation),
            headers: { 
              'Content-Type': 'application/json' ,
              'Authorization': linearKey,
            },
        })
        .then(checkStatus)
        .then(json => console.log(json))
    return
})();