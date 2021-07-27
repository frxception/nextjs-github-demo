module.exports = {
    env: {
        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
        GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET
    },
    webpackDevMiddleware: config => {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
  
      return config
    },
  }