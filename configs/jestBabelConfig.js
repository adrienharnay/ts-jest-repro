const path = require('path');

const babelOptions = {
  extends: path.join(__dirname, './.babelrc.base.js'),
  babelrc: false,
};

module.exports = babelOptions;
