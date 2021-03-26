
const newLinearIssueMutation = (title, body, teamId) => (
  `mutation {
  issueCreate(
    input: {
      title: "${title}"
      description: "${body}"
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

