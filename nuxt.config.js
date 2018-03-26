module.exports = {
  srcDir:'src/',
  css: [
    { src: 'assets/css/gtris.css', lang: 'css' } // sass 대신 scss
  ],
  build: {
    vendor: ['axios']
  }
}