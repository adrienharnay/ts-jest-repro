const path = require('path');
const { defaults } = require('jest-config');

const babelConfig = require('./configs/.babelrc.base.js');

module.exports = {
  cacheDirectory: path.join(__dirname, 'node_modules/.cache/jest'),
  collectCoverageFrom: ['**/(utils|libs)/**/*.{js,ts}'],
  coverageDirectory: path.join(__dirname, './coverage'),
  globals: Object.assign({
    __NODE_ENV__: 'test',
    'ts-jest': {
      babelConfig,
      tsConfig: path.join(__dirname, 'tsconfig.json'),
    },
  }),
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
  moduleDirectories: ['node_modules'],
  modulePaths: [__dirname],
  rootDir: __dirname,
  roots: [__dirname],
  testRegex: '\\.test\\.(j|t)s$',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
};
