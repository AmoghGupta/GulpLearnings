'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');

// this compiles the scss to css
gulp.task('sass', function () {
  gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css-compile'));
}
);

// this is for concatenating and minifying the css
gulp.task('styles', function() {
  gulp.src(['src/css-compile/**/*.css'])
  .pipe(autoprefix('last 2 versions'))
  .pipe(minifyCSS())
  .pipe(gulp.dest('build/minified-version/'));
});

// this for watching the changes to scss
gulp.task('sass:watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['sass','styles']);
});


gulp.task('default', ['sass', 'styles'], function() {
  gulp.start('sass:watch');
});

  