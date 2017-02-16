/* eslint-disable import/no-extraneous-dependencies */
const gulp = require('gulp');
const webpack = require('webpack');

gulp.task('scripts', ['modernizr'], (callback) => {
  webpack(require('../../webpack.config.js'), (err, stats) => {
    if (err) {
      console.error(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});
