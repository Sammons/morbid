module.exports = (wallaby) => {
  return {
    files: [
      { pattern: '**/*.ts' },
      { pattern: 'test/**/*.test.ts', ignore: true },
      { pattern: 'test/**/*.sql' }
    ],
    tests: [
      { pattern: '**/*.test.ts' }
    ],
    testFramework: "jest",
    env: {
      type: "node",
      runner: "node",
    },
    // setup: (wallaby) => {
    //   wallaby.testFramework.configure()
    // }
  }
}