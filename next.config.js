const path = require('path');
const dotenv = require('dotenv');

/* eslint-disable no-console */
console.log('\x1b[36m%s\x1b[0m', `[ ENV = ${process.env.NODE_ENV} mode ]`);

const localEnv = dotenv.config({ path: `.env.${process.env.ENV || 'development'}` }).parsed;

module.exports = {
    resolve: {
        alias: {
            '@app/*': path.resolve(__dirname, './*')
        }
    },
      i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ['en-US', 'fr-FR', 'es-ES'],
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path.
     */
    defaultLocale: 'en-US',
  },
    env: localEnv
};
