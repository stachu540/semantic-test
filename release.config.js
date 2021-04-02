module.exports = {
  branches: ['main'],
  plugins: [
    ['@semantic-release/commit-analyzer', {
      releaseRules: [
        { type: 'feat', release: 'minor' },
        { type: 'pref', release: 'minor' },
        { type: 'fix', release: 'patch' },
        { type: 'refactor', release: 'patch' },
        { type: 'deps', release: 'patch' },
        { type: 'build', release: 'patch' },
        { type: 'chore', release: 'patch' },
        { type: 'docs', scope: 'README', release: 'patch' },
        { type: 'style', release: 'patch' }
      ],
      parserOpts: {
        noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES']
      }
    }],
    ['@semantic-release/release-notes-generator', {
      preset: 'conventionalcommits',
      parserOpts: {
        noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
      },
      presetConfig: {
        header: "Changelog",
        types: [
          { type: 'feat', section: 'Features', hidden: false },
          { type: 'pref', section: 'Performance', hidden: false },
          { type: 'fix', section: 'Bugs fixed', hidden: false },
          { type: 'refactor', section: 'Refactor', hidden: false },
          { type: 'deps', section: 'Dependency Updates', hidden: false },
          { type: 'chore', section: 'Conventional Changes', hidden: false },
          { type: 'build', hidden: true },
          { type: 'docs', hidden: true },
          { type: 'style', hidden: true }
        ]
      }
    }],
    'gradle-semantic-release-plugin',
    ['@semantic-release/git', {
      assets: ['gradle.properties'],
      message: 'release: ${nextRelease.version}\n\n${nextRelease.notes}'
    }],
    ['@semantic-release/github', {
      assets: [{ path: '**/build/libs/**-shaded.jar' }]
    }]
  ]
}
