module.exports = {
  webpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
      ],
    },
  },
};
