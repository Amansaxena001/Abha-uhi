      const path = require("path");

// console.log('\x1b[36m%s\x1b[0m',`Server running on ${process.env.NODE_ENV} mode`);  


module.exports = {
    resolve: {
        alias: {
            "@app/*": path.resolve(__dirname, "./*"),
          },
        },
      };
      
      
    
//       const withCSS = require('@zeit/next-css')
// const withLess=require('@zeit/next-less')
// const withSass=require('@zeit/next-sass')


// module.exports = withCSS({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: "[local]___[hash:base64:5]",
//   },
  
//   webpack: (config, { isServer }) => {
//     //Make Ant styles work with less
//     config.resolve.alias["@app"] = path.join(__dirname, "./*");
//     return config;
//   },
// });
