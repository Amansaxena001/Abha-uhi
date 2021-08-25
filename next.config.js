const path = require('path');

// console.log('\x1b[36m%s\x1b[0m',`Server running on ${process.env.NODE_ENV} mode`);

module.exports = {
     resolve: {
          alias: {
               '@app/*': path.resolve(__dirname, './*')
          }
     }
};
