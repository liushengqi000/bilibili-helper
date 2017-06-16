let gulp = require('gulp');
let gulpCopy = require('gulp-copy');
let typescript = require('typescript');
let tsc = require('gulp-typescript');
let del = require('del');
let systemjsBuilder = require('systemjs-builder');
let tscOption = require('./tsconfig.json').compilerOptions;
let watch = require('gulp-watch');
gulp.task('clean', () => {
  return del(['./dest/**/*']);
});
gulp.task('tsc', ['clean'], () => {
  return gulp.src(['ts/**/*.ts', 'typings/index.d.ts'])
    .pipe(tsc(tscOption)).js.pipe(gulp.dest('dest/js'));
});
gulp.task('dest-copy', ['clean','tsc'], () => {
  return gulp.src(['./*.html','./node_modules/rxjs/**/*'])
    .pipe(gulpCopy('./dest/'));
});
gulp.task('ts-copy', ['clean'], () => {
  return gulp.src(['./ts/**/*.html','./ts/**/*.css','./ts/**/*.js','./systemjs.config.js'])
    .pipe(gulpCopy('./dest/js', { prefix: 1 }));
});
gulp.task('lib-copy', ['clean','dependencies-bundle'], () => {
  return gulp.src(['./libs/**/*.js'])
    .pipe(gulpCopy('./dest/js/libs', { prefix: 1 }));
});
gulp.task('dependencies-bundle', ['ts-copy','clean','tsc'], () => {
  let builder = new systemjsBuilder('', './systemjs.config.js');
  return builder.bundle('dest/js/**/*.js - [dest/js/**/*.js]', './dest/js/dependencies.bundle.min.js', {
    minify: true
  }).then(function () {
    console.log('Build complete');
  }).catch(function (err) {
    console.error(err);
  });
});
gulp.task('ts', ['angular2-bundle'], () => { });
gulp.task('copy', ['html-copy', 'css-copy'], () => { });
gulp.task('production', ['tsc','dest-copy', 'ts-copy','lib-copy','dependencies-bundle'], () => {
  return gulp.src(['./manifest.json','./README.md','./LICENSE','./imgs/**/*','./_locales/**/*']).pipe(gulpCopy('./dest'));
});