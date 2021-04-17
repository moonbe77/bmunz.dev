const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  env: {},
  future: {
    webpack5: true,
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
});
