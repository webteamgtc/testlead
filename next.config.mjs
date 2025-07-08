// /** @type {import('next').NextConfig} */
// const nextConfig = {
//    async redirects() {
//     return [
//       {
//         source: '/',
//         destination: 'https://gtcfx.com',
//         permanent: true,
//       },
//       {
//         source: '/uae',
//         destination: '/uae/partner',
//         permanent: true,
//       },
//     ];
//   },
//   images: {
//     domains: ['gtcfx-bucket.s3.ap-southeast-1.amazonaws.com'],
//   },
// };


// export default nextConfig;


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
    ];
  },
   images: {
    domains: ['gtcfx-bucket.s3.ap-southeast-1.amazonaws.com'],
  },
};

export default nextConfig;
