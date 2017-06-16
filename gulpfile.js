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
gulp.task('clean-ts', () => {
  return del(['./dest/js/bh-*/**/*','./dest/js/*.js']);
});
gulp.task('tsc', ['clean'], () => {
  return gulp.src(['src/ts/**/*.ts', 'typings/index.d.ts'])
    .pipe(tsc(tscOption)).js.pipe(gulp.dest('dest/js'));
});
gulp.task('dest-copy', ['clean','tsc'], () => {
  return gulp.src(['node_modules/rxjs/**/*'])
    .pipe(gulpCopy('dest/'));
});
gulp.task('ts-copy', ['clean'], () => {
  return gulp.src(['src/ts/**/*.html','src/ts/**/*.css','src/ts/**/*.js','src/systemjs.config.js'])
    .pipe(gulpCopy('dest/js', { prefix: 2 }));
});
gulp.task('lib-copy', ['clean','dependencies-bundle'], () => {
  return gulp.src(['src/libs/**/*.js'])
    .pipe(gulpCopy('dest/js/libs', { prefix: 2 }));
});
gulp.task('dependencies-bundle', ['ts-copy','clean','tsc'], () => {
  let builder = new systemjsBuilder('', 'src/systemjs.config.js');
  return builder.bundle('dest/js/**/*.js - [dest/js/**/*.js]', './dest/js/libs/dependencies.bundle.min.js', {
    minify: true
  }).then(function () {
    console.log('Build complete');
  }).catch(function (err) {
    console.error(err);
  });
});
gulp.task('ts', ['tsc','ts-copy'], () => { });
gulp.task('copy', ['html-copy', 'css-copy'], () => { });
gulp.task('production', ['tsc','dest-copy', 'ts-copy','lib-copy','dependencies-bundle'], () => {
  return gulp.src(['src/*.html','src/manifest.json','src/README.md','src/LICENSE','src/imgs/**/*','src/_locales/**/*']).pipe(gulpCopy('./dest/', { prefix: 1 }));
});
gulp.task('watch', function () {
	// Endless stream mode
    watch(['src/ts/**/*.ts'],()=>{
      gulp.start('tsc');
    });
    watch(['src/ts/**/*.css','src/ts/**/*.html','src/ts/**/*.js'],{verbose:true}, function () {
        gulp.src(['src/ts/**/*.css','src/ts/**/*.html','src/ts/**/*.js'])
            .pipe(gulpCopy('dest/js', { prefix: 2 }));
    });
    watch(['src/*.html'],{verbose:true}, function () {
        gulp.src(['src/*.html'])
            .pipe(gulpCopy('dest/', { prefix: 1 }));
    });
});