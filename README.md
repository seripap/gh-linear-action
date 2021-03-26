# Github Linear Action

Creates a linear issue through GitHub actions.

This isn't 100% fully baked, so please use at your own risk.

# Usage

### .github/workflows/labeled-issue.yml

Push a new linear issue when issues are tagged with `triaged`

```yaml
name: Move triaged to Linear

on:
  issues:
    types: [labeled]

jobs:
  create-linear-issue:
    runs-on: ubuntu-latest
    steps:
      - name: 'Check if labeled triaged'
        if: contains(github.event.label.name, 'triaged' )
        uses: seripap/gh-linear-action@v1.0.3
        with:
          linear-key: your-linear-api-key
          linear-team-id: your-linear-team-id
          title: ${{ github.event.issue.title }}
          body: ${{ github.event.issue.body }}
          url: ${{ github.event.issue.issue_url }}
```