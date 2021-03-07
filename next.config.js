const path = require("path");
module.exports = {
  resolve: {
    alias: {
      "@styles/*": path.resolve(__dirname, "./styles/*"),
      "@app/*": path.resolve(__dirname, "./*"),
    },
  },
};
