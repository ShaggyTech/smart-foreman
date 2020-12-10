module.exports = {
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
              browsers: '> 0.5%, last 2 versions',
            },
          },
        ],
      ],
    },
  },
};
