module.exports = {
  reactStrictMode: false,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      // '/#hero': { page: '#hero' },
      // '/#story': { page: '/#story' },
      // '/#roadmap': { page: '/#roadmap' },
      // '/#teams': { page: '/#teams' },
    }
  },
}
