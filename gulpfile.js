var gulp = require('gulp');
var typescript = require('typescript');
var tsc = require('gulp-typescript');
var del  = require('del');
var systemjsBuilder = require('systemjs-builder');
var tscOption = require('./tsconfig.json').compilerOptions;
gulp.task('tsc', function () {
  return gulp.src(['ts/**/*.ts', 'typings/index.d.ts'])
    .pipe(tsc(tscOption)).js.pipe(gulp.dest('js'));
});
gulp.task('background-tsc', function () {
  return gulp.src(['ts/background/**/*.ts', 'typings/index.d.ts'])
    .pipe(tsc(tscOption)).js.pipe(gulp.dest('js/background'));
});
gulp.task('popup-tsc', function () {
  return gulp.src(['ts/popup/**/*.ts', 'typings/index.d.ts'])
    .pipe(tsc(tscOption)).js.pipe(gulp.dest('js/popup'));
});
gulp.task('option-tsc', function () {
  return gulp.src(['ts/option/**/*.ts', 'typings/index.d.ts'])
    .pipe(tsc(tscOption)).js.pipe(gulp.dest('js/option'));
});
gulp.task('bundle-app', ['tsc'], function () {
  return gulp.src('./systemjs.config.js').pipe(gulp.dest('./js'));
});
gulp.task('clean',function(cb){return del(['./js']);})
gulp.task('bundle-dependencies', ['tsc'], function () {
  var builder = new systemjsBuilder('', './systemjs.config.js');
  return builder.bundle('js/**/* - [js/**/*.js]', './js/dependencies.bundle.min.js', {
    minify: true,
    mangle: true
  }).then(function () { console.log('Build complete'); }).catch(function (err) { console.error(err); });
});
gulp.task('production', ['clean','bundle-dependencies'], function () { });