/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/signin',
        permanent: false,
      },
    ];
  },

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: `/_next/static/sounds/`,
          outputPath: `${options.isServer ? '../' : ''}static/sounds/`,
        },
      },
    });

    return config;
  },

  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
