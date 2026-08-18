/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => ({
  reactStrictMode: true,
  i18n,
  // Keep `next build` from replacing chunks used by a running dev server.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
});
