module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/cv/'
    : '/',
  outputDir: process.env.NODE_ENV === 'production'
    ? 'docs'
    : 'dist'
}