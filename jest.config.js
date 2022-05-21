// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "test/(.*)": "<rootDir>/test/$1",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,ts}",
  ]
};

// TODO : https://jestjs.io/fr/docs/configuration