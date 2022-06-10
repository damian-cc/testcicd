// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  jest: {
    babel: {
      addPresets: true, /* (default value) */
      addPlugins: true  /* (default value) */
    },
    configure: {
      reporters: [
        'default',
        ['<rootDir>/github-actions-reporter.js'],
      ], },
    configure: (jestConfig, { env, paths, resolve, rootDir }) => { return jestConfig; }
  },
};
