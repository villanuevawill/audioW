// 'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat')


// the paths to our app files
var paths = {
  // all our client app js files, not including 3rd party js files
  scripts: ['src/**/*.js'],
};

gulp.task('scripts', function(){
  gulp.src(paths.scripts)
    .pipe(concat('audiow.js'))
    .pipe(gulp.dest('dist/'));
})

// watch all our client code and force a refersh when they change
gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['watch']);
