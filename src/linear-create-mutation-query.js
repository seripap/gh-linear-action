
const newLinearIssueMutation = (title, body, teamId, issueUrl) => (
  `mutation {
  issueCreate(
    input: {
      title: "${title}"
      description: "${body}\n\n[View original issue in GitHub](${issueUrl})"
      teamId: "${teamId}"
    }
  ) {
    success
    issue {
      id
      title
    }
  }
}`)

module.exports = newLinearIssueMutation;

