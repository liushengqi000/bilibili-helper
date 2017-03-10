var gulp = require('gulp');
var typescript = require('typescript');
var tsc = require('gulp-typescript');
var systemjsBuilder = require('systemjs-builder');
var tscOption = {
  "target": "es2015",
  "module": "commonjs",
  "moduleResolution": "node",
  "sourceMap": true,
  "emitDecoratorMetadata": true,
  "experimentalDecorators": true,
  "removeComments": true,
  "noImplicitAny": false,
  "suppressImplicitAnyIndexErrors": true
};
gulp.task('tsc', function () {
  return gulp.src(['ts/**/*.ts', 'typings/index.d.ts'])
    .pipe(tsc(tscOption)).js.pipe(gulp.dest('dest'));
});
gulp.task('background-tsc', function () {
  return gulp.src(['ts/background/**/*.ts', 'typings/index.d.ts'])
    .pipe(tsc(tscOption)).js.pipe(gulp.dest('dest/background'));
});
gulp.task('popup-tsc', function () {
  return gulp.src(['ts/popup/**/*.ts', 'typings/index.d.ts'])
    .pipe(tsc(tscOption)).js.pipe(gulp.dest('dest/popup'));
});
gulp.task('option-tsc', function () {
  return gulp.src(['ts/option/**/*.ts', 'typings/index.d.ts'])
    .pipe(tsc(tscOption)).js.pipe(gulp.dest('dest/option'));
});
gulp.task('bundle-config', function () {
  return gulp.src('js/configs/systemjs.config.js')
    .pipe(gulp.dest('dest/configs'))
    .pipe(gulp.dest('production'));
});
gulp.task('bundle-background', ['bundle-config', 'background-tsc'], function () {
  var builder = new systemjsBuilder('', 'js/configs/systemjs.config.js');
  return builder.bundle('[dest/background/**/*]', 'production/js/background.js', {
    minfy: true,
    mangle: true
  }).then(function () { console.log('Build complete'); }).catch(function (err) { console.error(err); });
});
gulp.task('bundle-popup', ['bundle-config', 'popup-tsc'], function () {
  var builder = new systemjsBuilder('', 'js/configs/systemjs.config.js');
  return builder.bundle('[dest/popup/**/*]', 'production/js/popup.js', {
    minfy: true,
    mangle: true
  }).then(function () { console.log('Build complete'); }).catch(function (err) { console.error(err); });
});
gulp.task('bundle-option', ['bundle-config', 'option-tsc'], function () {
  var builder = new systemjsBuilder('', 'js/configs/systemjs.config.js');
  return builder.bundle('[dest/option/**/*]', 'production/js/option.js', {
    minfy: true,
    mangle: true
  }).then(function () { console.log('Build complete'); }).catch(function (err) { console.error(err); });
});
gulp.task('bundle-dependencies', ['bundle-config', 'tsc'], function () {
  var builder = new systemjsBuilder('', 'js/configs/systemjs.config.js');
  return builder.bundle('dest/**/* - [dest/**/*.js]', 'production/js/dependencies.bundle.min.js', {
    minify: true,
    mangle: true
  }).then(function () { console.log('Build complete'); }).catch(function (err) { console.error(err); });
});
gulp.task('production', ['bundle-background', 'bundle-popup', 'bundle-option', 'bundle-dependencies'], function () { });