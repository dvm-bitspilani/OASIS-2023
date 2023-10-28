/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bits-oasis.org",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
}

const withVideos = require("next-videos")

// module.exports = withVideos(nextConfig)

module.exports = {
  future: {
    webpack5: true
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "_next/static/worker",
            outputPath: "static/worker"
          }
        }
      ]
    });
    // videos config
    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "_next/static/videos",
            outputPath: "static/videos"
          }
        }
      ]
    })
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[ext]',
        },
      },
    });

    // config.module.rules.push({
    //   test: /\.pdf$/,
    //   use: 'raw-loader',
    // });
    return config
  },
// Add the withvideos config
  // ...withVideos(nextConfig),
}
