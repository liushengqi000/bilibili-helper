let gulp = require('gulp');
let gulpCopy = require('gulp-copy');
let typescript = require('typescript');
let tsc = require('gulp-typescript');
let del = require('del');
let systemjsBuilder = require('systemjs-builder');
let tscOption = require('./src/tsconfig.json').compilerOptions;
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
  gulp.src(['src/ts/**/*.html','src/ts/**/*.css'])
  .pipe(gulpCopy('./dest/js', { prefix: 2 }));
  return gulp.src([
    'src/*.html',
    'src/styles/*.css',
    'src/manifest.json',
    'src/README.md',
    'src/LICENSE',
    'src/imgs/**/*',
    'src/_locales/**/*',
    // 'src/traceur.js'
  ]).pipe(gulpCopy('./dest/', { prefix: 1 }));
});

gulp.task('tsc-watch', [], () => {
  return gulp.src(['src/ts/**/*.ts', 'typings/index.d.ts']).pipe(tsc(tscOption)).js.pipe(gulp.dest('dest/js'));
});
gulp.task('html-watch', [], () => {
  return gulp.src(['src/ts/**/*.html']).pipe(gulpCopy('dest/js/', { prefix: 2 })); 
});
gulp.task('dest-html-watch', [], () => {
  return gulp.src(['src/*.html']).pipe(gulpCopy('dest/', { prefix: 1 })); 
});
gulp.task('css-watch', [], () => {
  return gulp.src(['src/ts/**/*.css']).pipe(gulpCopy('dest/js/', { prefix: 2 })); 
});


gulp.task('watch', ['production'], ()=>{
	// Endless stream mode
    return [watch(['src/ts/**/*.html'],{verbose:true}, function () {
      gulp.start('html-watch');
    }),
    watch(['src/*.html'],{verbose:true}, function () {
      gulp.start('dest-html-watch');
    }),
    watch(['src/ts/**/*.css'],{verbose:true}, function () {
      gulp.start('css-watch');
    }),
    watch(['src/ts/**/*.ts'],(event)=>{
      gulp.start('tsc-watch');
    })];
});