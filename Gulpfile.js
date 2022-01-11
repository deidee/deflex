
'use strict';

let gulp = require('gulp');
let pipeline = require('readable-stream').pipeline;
let rename = require('gulp-rename');
let sass = require('gulp-sass')(require('sass'));
let sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./css'))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});
