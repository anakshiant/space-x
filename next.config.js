const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const { API_URL } = process.env;

module.exports = {
  publicRuntimeConfig: {
    API_URL: (API_URL || "").trim(),
  },
  webpack: (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin());

    return config;
  },
};
