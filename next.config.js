const dotenv = require('dotenv')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withFonts = require('nextjs-fonts')

dotenv.config({ path: __dirname + '/.env' })
module.exports = withSass(withCSS(withFonts({
  cssModules: true,
  env: {
    GHOST_KEY: process.env.GHOST_KEY,
    GHOST_VERSION: process.env.GHOST_VERSION,
    GHOST_URL: process.env.GHOST_URL,
    S3_BUCKET: process.env.S3_BUCKET
  },
  publicRuntimeConfig: false
})))