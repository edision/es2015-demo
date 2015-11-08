'use strict'

var gulp = require('gulp')
var browserify = require('browserify')
var babel = require('gulp-babel')
var babelify = require('babelify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var babel = require('gulp-babel')

gulp.task('babel-complie', function() {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: [ 'es2015-without-regenerator' ],
      plugins: [ 'transform-async-to-generator' ]
    }))
    .pipe(gulp.dest('dist/'))
})

gulp.task('browserify', function() {
  return browserify({
    cache: {},
    packageCache: {},
    entries: ['./src/public/main.js']
  })
    .transform(babelify.configure({
      "presets": [ 'es2015-without-regenerator' ],
      "plugins": [ 'transform-async-to-generator' ]
    }))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dist/public'))
})

gulp.task('default', ['babel-complie', 'browserify'])