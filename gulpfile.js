var gulp = require('gulp');
var gulpCopy = require('gulp-copy');
var typescript = require('typescript');
var tsc = require('gulp-typescript');
var del = require('del');
var systemjsBuilder = require('systemjs-builder');
var tscOption = require('./tsconfig.json').compilerOptions;
gulp.task('clean', function (cb) {
  return del(['./js','./templates']);
})
gulp.task('tsc', ['clean'], function () {
  return gulp.src(['ts/**/*.ts', 'typings/index.d.ts'])
    .pipe(tsc(tscOption)).js.pipe(gulp.dest('js'));
});
// gulp.task('background-tsc', function () {
//   return gulp.src(['ts/background/**/*.ts', 'typings/index.d.ts'])
//     .pipe(tsc(tscOption)).js.pipe(gulp.dest('js/background'));
// });
// gulp.task('popup-tsc', function () {
//   return gulp.src(['ts/popup/**/*.ts', 'typings/index.d.ts'])
//     .pipe(tsc(tscOption)).js.pipe(gulp.dest('js/popup'));
// });
// gulp.task('option-tsc', function () {
//   return gulp.src(['ts/option/**/*.ts', 'typings/index.d.ts'])
//     .pipe(tsc(tscOption)).js.pipe(gulp.dest('js/option'));
// });
gulp.task('html-copy', ['clean'], function () {
  return gulp.src(['./ts/**/*.html'])
    .pipe(gulpCopy('./js/',{prefix:1}));
});
gulp.task('css-copy', ['clean'], function () {
  return gulp.src(['./ts/**/*.css'])
    .pipe(gulpCopy('./js/',{prefix:1}));
});
gulp.task('bundle-config', ['clean'], function () {
  return gulp.src('./systemjs.config.js').pipe(gulp.dest('./js/'));
});

gulp.task('bundle-dependencies', ['bundle-config', 'tsc'], function () {
  var builder = new systemjsBuilder('', './systemjs.config.js');
  return builder.bundle('js/**/*.js - [js/**/*.js]', './js/dependencies.bundle.min.js', {
    minify: true,
    mangle: true
  }).then(function () {
    console.log('Build complete');
  }).catch(function (err) {
    console.error(err);
  });
});
gulp.task('production', ['html-copy','css-copy','bundle-dependencies','clean'], function () {});