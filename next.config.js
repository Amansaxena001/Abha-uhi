const path = require('path');
/* eslint-disable no-console */
console.log('\x1b[36m%s\x1b[0m', `[ ENV = ${process.env.NODE_ENV} mode ]`);

module.exports = {
    resolve: {
        alias: {
            '@app/*': path.resolve(__dirname, './*')
        }
    }
    // images: {
    //     domains: ['cdn.dribbble.com'],
    // },
};
