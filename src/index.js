const core = require('@actions/core');
const linear = require('@linear/sdk');

(async () => {
    const apiKey = core.getInput('linear-key');
    const teamId = core.getInput('linear-team-id');
    const title = core.getInput('title');
    const url = core.getInput('url');
    const description = core.getInput('body') + `\n\n[View original issue in GitHub](${url})`;

    const linearClient = new linear.LinearClient({ apiKey });
    await linearClient.issueCreate({ 
      teamId, 
      title,
      description,
    });

    return
})();