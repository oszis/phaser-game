module.exports = {
  plugins: [
    require('css-mqpacker')(),
    require('postcss-preset-env')({
      autoprefixer: { grid: true },
    }),
    require('cssnano')({
      preset: 'default',
    }),
    // require('postcss-uncss')({
    //   html: ['html/*.html'],
    //   ignore: [
    //     /.*(?<=\/.active|collapse|collapsing|fade|navbar|dropdown|open|modal|in|is|smooth|slider-navigation|fail|header|contrast|_is-active|invisible|sandwich|col|phone-box|print).*/,
    //   ],
    // }),
  ],
};
