const pkg = require('../package.json');

module.exports = api => {
  api.cache(true);

  const presets = [
    [
      '@babel/env',
      {
        modules: 'commonjs',
        useBuiltIns: 'usage',
        targets: { node: pkg.engines.node },
      },
    ],
    '@babel/typescript',
  ];

  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
  ];

  return {
    presets,
    plugins,
  };
};
