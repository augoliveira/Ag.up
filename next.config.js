const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
})
module.exports = {
  swcMinify: true,
};
module.exports = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
}
module.exports = {
  experimental: {
    outputStandalone: true,
  },
};
