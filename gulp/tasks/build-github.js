/* eslint-disable import/no-extraneous-dependencies */
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const del = require('del');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

gulp.task('previewGithub', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'docs' }
  });
});


gulp.task('deleteDocsFolder', ['icons'], () =>
  del('./docs')
);

gulp.task('copyGeneralFiles', ['deleteDocsFolder'], () => {
  const pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ];

  return gulp.src(pathsToCopy).pipe(gulp.dest('./docs'));
});

gulp.task('optimizeImages', ['deleteDocsFolder'], () =>
  gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
  .pipe(imagemin({
    progressive: true,
    interlaced: true,
    multipass: true
  }))
  .pipe(gulp.dest('./docs/assets/images'))
);

gulp.task('useminTrigger', ['deleteDocsFolder'], () => {
  gulp.start('usemin');
});

gulp.task('usemin', ['styles', 'scripts'], () =>
  gulp.src('./app/index.html')
  .pipe(usemin({
    css: [() => rev(), () => cssnano()],
    js: [() => rev(), () => uglify()]
  }))
  .pipe(gulp.dest('./docs'))
);

gulp.task('buildGithub', ['deleteDocsFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);
