const dotenv = require('dotenv')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withFonts = require('nextjs-fonts')

dotenv.config({ path: __dirname + '/.env' })
module.exports = withCSS(withSass(withFonts({
  cssModules: true,
  env: {
    GHOST_KEY: process.env.GHOST_KEY,
    GHOST_VERSION: process.env.GHOST_VERSION,
    GHOST_URL: process.env.GHOST_URL
  },
  publicRuntimeConfig: false
})))