const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://gtcfx.com',
        permanent: true,
      },
      {
        source: '/uae',
        destination: '/uae/partners',
        permanent: true,
      },
      {
        source: '/adsbot-ok',
        destination: '/en/adsbot-ok',
        permanent: true,
      },
    ];
  },
   images: {
    domains: ['gtcfx-bucket.s3.ap-southeast-1.amazonaws.com'],
  },
};
 
module.exports = withNextIntl(nextConfig);


